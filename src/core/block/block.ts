import { nanoid } from 'nanoid';

import type { NullableElementType, MetaType, PropsType } from './block.types';
import { ID_SIZE } from '../../utils/constants.ts';
import { EventBus } from '../event-bus';

export class Block<T extends PropsType> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CDR: 'flow:component-did-render',
    FLOW_RENDER: 'flow:render',
  } as const;

  private readonly _id: string;
  protected _meta: MetaType<T>;
  private _element: NullableElementType = null;

  protected eventBus: () => EventBus;

  constructor(tagName: string = 'div', props: T) {
    this._meta = {
      tagName,
      props,
    };

    const eventBus = new EventBus();

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    this._id = nanoid(ID_SIZE);

    this._meta.props = this._makePropsProxy(props);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
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
  }

  public componentDidMount(): void {}

  private _componentDidUpdate(): void {
    if (this.componentDidUpdate()) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  public componentDidUpdate(): boolean {
    return true;
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

  private _render(): void {
    if (this.element !== null) {
      const block = this.render();

      if (block !== null) {
        this.element.append(block);
        this._element?.setAttribute('data-id', this._id);
      }

      this.eventBus().emit(Block.EVENTS.FLOW_CDR);
    }
  }

  public render(): string {
    return '';
  }

  public init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  public get element(): NullableElementType {
    return this._element;
  }

  public getContent(): NullableElementType {
    return this._element;
  }

  public setProps(nextProps: T): void {
    if (nextProps === null || nextProps === undefined) {
      return;
    }

    Object.assign(this._meta.props, nextProps);
  }

  public show(): void {
    if (this.element !== null) {
      this.element.style.display = 'block';
    }
  }

  public hide(): void {
    if (this.element !== null) {
      this.element.style.display = 'none';
    }
  }
}
