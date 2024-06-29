import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import type {
  BlockChildren,
  BlockInstance,
  ComponentContext,
  ComponentMeta,
  NullableElement,
  Props,
  Refs,
} from 'src/core/block';
import { EventBus } from 'src/core/event-bus';
import { isEqual } from 'src/helpers/is-equal';
import { ID_SIZE } from 'src/utils/constants';

export class Block<T extends Props, R extends Refs> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render',
  } as const;

  readonly id: string;
  public meta: ComponentMeta<T, R>;
  eventBus: () => EventBus;
  protected readonly refs: R = {} as unknown as R;
  private readonly children: BlockChildren = [];

  constructor(props: T, tagName: string = 'div') {
    this.id = nanoid(ID_SIZE);

    this.meta = {
      props,
      tagName,
    };

    const eventBus = new EventBus();

    this.meta.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    this.eventBus = () => eventBus;

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _element: NullableElement = null;

  public get element(): NullableElement {
    return this._element;
  }

  public componentDidMount(): void {}

  public componentDidUpdate(oldProps: T, newProps: T): boolean {
    return !isEqual(oldProps, newProps);
  }

  public init(): void {}

  public render(): string {
    return '';
  }

  public getContent(): NullableElement {
    return this._element;
  }

  public setProps(nextProps: Partial<T>): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this.meta.props, nextProps);
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _createResources(): void {
    this._element = this._createDocumentElement(this.meta.tagName);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate(oldProps: T, newProps: T): void {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _componentWillUnmount(): void {
    this.componentWillUnmount();
    this._removeEvents();
    this.children.forEach((child: BlockInstance) => {
      child.componentWillUnmount();
    });
  }

  private _addEvents(): void {
    const { events = {} } = this.meta;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents(): void {
    const { events = {} } = this.meta;

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
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

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
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _compileTemplate(template: string, context: T): DocumentFragment {
    const contextAndStubs: ComponentContext = {
      ...context,
      __refs: this.refs,
    };

    Object.entries(this.children).forEach(([key, child]) => {
      contextAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }) => {
      embed(temp.content);
    });

    this.children.forEach((child: BlockInstance) => {
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
      const fragment = this._compileTemplate(this.render(), this.meta.props);

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
