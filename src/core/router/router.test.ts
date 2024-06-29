import { expect } from 'chai';
import Sinon from 'sinon';

import { Router } from 'src/core';
import { FirstMockPage, SecondMockPage } from 'src/core/router/router.mock';
import { ROOT_QUERY_SELECTOR } from 'src/utils/constants';

describe('Router', () => {
  let router: Router;

  before(() => {
    router = new Router(ROOT_QUERY_SELECTOR);
  });

  describe('Initialization', () => {
    it('should be a singleton', () => {
      const newRouter = new Router(ROOT_QUERY_SELECTOR);
      expect(router).to.eq(newRouter);
    });

    it('should initialize with empty routes', () => {
      expect(router.routes).to.be.empty;
    });
  });

  describe('Routes Management', () => {
    it('should add routes using use method', () => {
      const useSpy = Sinon.spy(router, 'use');
      router.use('/', FirstMockPage, {}).use('/chat', SecondMockPage, {});
      expect(router.routes).to.have.lengthOf(2);
      expect(useSpy.calledTwice).to.be.true;
    });

    it('should get the correct route using getRoute method', () => {
      router.use('/test', FirstMockPage, {});
      const route = router.getRoute('/test');
      expect(route).to.not.be.null;
    });
  });

  describe('Navigation', () => {
    it('should add an entry to history', () => {
      router.go('/');
      router.go('/chat');
      expect(window.history.length).to.eq(3);
    });

    it('should navigate to URL', () => {
      router.go('/chat');
      expect(window.location.pathname).to.eq('/chat');
    });

    it('should return to the previous URL', () => {
      const backSpy = Sinon.spy(window.history, 'back');
      router.go('/');
      router.go('/chat');
      router.back();
      expect(backSpy.calledOnce).to.be.true;
    });

    it('should return to the forward URL', () => {
      const forwardSpy = Sinon.spy(window.history, 'forward');
      router.go('/');
      router.go('/chat');
      router.forward();
      expect(forwardSpy.calledOnce).to.be.true;
    });
  });
});
