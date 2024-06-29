import { JSDOM } from 'jsdom';
import { ROOT_QUERY_SELECTOR } from 'src/utils/constants';

const jsdom = new JSDOM(`<div class='app'><div>`, {
  url: 'http://localhost',
});

global.window = jsdom.window;
global.document = jsdom.window.document;
global.FormData = jsdom.window.FormData;
global.HTMLElement = jsdom.window.HTMLElement;
global.XMLHttpRequest = jsdom.window.XMLHttpRequest;
global.DOMParser = jsdom.window.DOMParser;
global.Element = jsdom.window.Element;
