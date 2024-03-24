import { renderDOM } from 'src/core';
import type { PageTypes } from 'src/pages';
import { pages } from 'src/pages';

export const navigate = (pageName: PageTypes): void => {
  const { pageConstructor: Page, context } = pages[pageName];

  const renderedPage = new Page(context as never);

  renderDOM(renderedPage);

  const navLinks = document.querySelectorAll('.link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href: string | null = (link as HTMLAnchorElement).getAttribute('href');

      if (href) {
        const pageName = href.slice(1) as PageTypes;

        navigate(pageName);
      }
    });
  });
};
