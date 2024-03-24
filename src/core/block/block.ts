import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import type {
  BlockChildren,
  ComponentContext,
  ComponentMeta,
  NullableElement,
  Props,
} from 'src/core/block';
import { EventBus } from 'src/core/event-bus';
import { ID_SIZE } from 'src/utils/constants';

export class Block<T extends Props> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render',
  } as const;

  readonly id: string;
  protected _meta: ComponentMeta<T>;
  protected _eventBus: () => EventBus;
  private readonly children: BlockChildren = [];

  constructor(tagName: string = 'div', props: T) {
    this.id = nanoid(ID_SIZE);

    this._meta = {
      tagName,
      props,
    };

    const eventBus = new EventBus();

    this._meta.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    this._eventBus = () => eventBus;

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _element: NullableElement = null;

  public get element(): NullableElement {
    return this._element;
  }

  public componentDidMount(): void {}

  public componentDidUpdate(): boolean {
    return true;
  }

  public init(): void {}

  public render(): string {
    return '';
  }

  public getContent(): NullableElement {
    return this._element;
  }

  public setProps(nextProps: T): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this._meta.props, nextProps);
  }

  public show(): void {
    if (this.element) {
      this.element.style.display = 'block';
    }
  }

  public hide(): void {
    if (this.element) {
      this.element.style.display = 'none';
    }
  }

  public componentWillUnmount(): void {}

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _createResources(): void {
    this._element = this._createDocumentElement(this._meta.tagName);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate(): void {
    if (this.componentDidUpdate()) {
      this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _componentWillUnmount(): void {
    this.componentWillUnmount();
    this._removeEvents();
    this.children.forEach((child) => {
      child.componentWillUnmount();
    });
  }

  private _addEvents(): void {
    const { events = {} } = this._meta;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents(): void {
    const { events = {} } = this._meta;

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  private _makePropsProxy(props: T): T {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop as keyof T];

        return typeof value === 'function' ? (value.bind(target) as T[keyof T]) : value;
      },
      set: (target, prop: string, value: T[keyof T]) => {
        const oldTarget = { ...target };

        target[prop as keyof T] = value;
        this._eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty: () => {
        throw new Error('Access denied');
      },
    });
  }

  private _init(): void {
    this.init();

    this._createResources();
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _compileTemplate(template: string, context: T): DocumentFragment {
    const contextAndStubs: ComponentContext = {
      ...context,
      __refs: this._meta.refs,
    };

    this.children.forEach((child) => {
      contextAndStubs[child.id] = `<div data-id="${child.id}"></div>`;
    });

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }) => {
      embed(temp.content);
    });

    this.children.forEach((child) => {
      const stub = temp.content.querySelector(`[data-id="${child.id}"]`);

      const childContent = child.getContent();

      if (stub && childContent) {
        stub.replaceWith(childContent);
      }
    });

    return temp.content;
  }

  private _render(): void {
    if (this._element) {
      const fragment = this._compileTemplate(this.render(), this._meta.props);

      const newElement = fragment.firstElementChild as HTMLElement;

      if (this._element && newElement) {
        this._element.replaceWith(newElement);
        this._element.setAttribute('data-id', this.id);
      }

      this._element = newElement;

      this._addEvents();
    }
  }
}
