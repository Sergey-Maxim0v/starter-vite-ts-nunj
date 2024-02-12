import env from './utils/env.ts';
import utils from './utils/utils.ts';
import PageLinks from './modules/page-links.ts';
import ScrollLocker from './utils/scroll-locker.ts';

class App {
  env = {};
  utils = {};
  modules = {};

  constructor() {
    this.env = { ...env };
    this.utils = { ...utils, ScrollLocker };
    this.modules = { PageLinks };
  }
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
(globalThis as any).App = new App();
