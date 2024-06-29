import { expect } from 'chai';
import Sinon from 'sinon';

import { Block, type BlockInstance } from 'src/core/block';
import { BlockMock } from 'src/core/block/block.mock.ts';

describe('Block', () => {
  let block: BlockInstance;
  const clickHandler = Sinon.spy();
  const props = { test: 'value', onClick: clickHandler };

  beforeEach(() => {
    block = new BlockMock(props);
  });

  describe('Initialization', () => {
    it('should initialize with an id', () => {
      expect(block.id).to.be.a('string');
    });

    it('should initialize with the correct tagName', () => {
      const customTagBlock = new Block({}, 'span');
      expect(customTagBlock.meta.tagName).to.eq('span');
    });
  });

  describe('Props Handling', () => {
    it('should set props correctly', () => {
      expect(block.meta.props.test).to.eq('value');
    });

    it('should update props correctly', () => {
      block.setProps({ test: 'newValue' });
      expect(block.meta.props.test).to.eq('newValue');
    });
  });

  describe('Lifecycle Methods', () => {
    it('should call componentDidMount', () => {
      const componentDidMountSpy = Sinon.spy(block, 'componentDidMount');
      block.eventBus().emit(Block.EVENTS.FLOW_CDM);
      expect(componentDidMountSpy.calledOnce).to.be.true;
    });

    it('should call componentDidUpdate', () => {
      const componentDidUpdateSpy = Sinon.spy(block, 'componentDidUpdate');
      block.eventBus().emit(Block.EVENTS.FLOW_CDU, {}, {});
      expect(componentDidUpdateSpy.calledOnce).to.be.true;
    });

    it('should call componentWillUnmount', () => {
      const componentWillUnmountSpy = Sinon.spy(block, 'componentWillUnmount');
      block.eventBus().emit(Block.EVENTS.FLOW_CWU);
      expect(componentWillUnmountSpy.calledOnce).to.be.true;
    });
  });

  describe('Events Handling', () => {
    it('should set events on element', () => {
      const blockWithEvents = new BlockMock({ onClick: clickHandler });
      blockWithEvents.getContent()?.click();
      expect(clickHandler.calledOnce).to.be.true;
    });
  });

  describe('Rendering', () => {
    it('should render correctly', () => {
      const renderSpy = Sinon.spy(block, 'render');
      block.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      expect(renderSpy.calledOnce).to.be.true;
    });

    it('should compile template correctly', () => {
      const template = '<div>{{test}}</div>';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const fragment = block._compileTemplate(template, block.meta.props);
      expect(fragment.firstElementChild?.innerHTML).to.eq('value');
    });
  });

  describe('Visibility', () => {
    it('should show element', () => {
      block.show();
      expect(block.getContent()?.style.display).to.eq('block');
    });

    it('should hide element', () => {
      block.hide();
      expect(block.getContent()?.style.display).to.eq('none');
    });
  });
});
