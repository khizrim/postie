import { type ComponentConstructor, Route } from 'src/core';
import type { PagePropsMap } from 'src/pages';

export class Router {
  private static __instance: Router | null = null;

  private readonly _routes: Route[] = [];
  private readonly _history: History = window.history;
  private readonly _rootQuery: string = '';
  private _currentRoute: Route | null = null;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = [];
    this._rootQuery = rootQuery;
    this._history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  public get routes(): Route[] {
    return this._routes;
  }

  public use(
    pathname: string,
    pageConstructor: ComponentConstructor<PagePropsMap[keyof PagePropsMap]>,
    pageContext: PagePropsMap[keyof PagePropsMap],
  ): this {
    const route = new Route(pathname, pageConstructor, {
      ...pageContext,
      rootQuery: this._rootQuery,
    });

    this._routes.push(route);

    return this;
  }

  public start(): void {
    const path = window.location.pathname;
    this._onPopState(path);
  }

  public go(path: string): void {
    this._history.pushState({}, '', path);
    this._onPopState(path);
  }

  public back(): void {
    this._history.back();
  }

  public forward(): void {
    this._history.forward();
  }

  public getRoute(path: string): Route | null {
    return this._routes.find((route) => route.match(path)) ?? null;
  }

  private readonly _onPopState = (path: string): void => {
    const route = this.getRoute(path);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    if (route) {
      route.navigate(path);
    }
  };
}
