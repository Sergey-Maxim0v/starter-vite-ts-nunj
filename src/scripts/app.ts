import env from './utils/env.ts';
import utils from './utils/utils.ts';
import ScrollLocker from './utils/scroll-locker.ts';
import Signal from './classes/Signal.ts';
import PageLinks from './modules/page-links.ts';
import Modals from './modules/modals.ts';
import Accordions from './modules/accordions.ts';
import Selects from './modules/selects.ts';

class App {
  env = {};
  utils = {};
  modules = {};
  classes = {};

  constructor() {
    this.env = { ...env };
    this.utils = { ...utils, ScrollLocker };
    this.modules = { PageLinks, Modals, Accordions, Selects };
    this.classes = { Signal };
  }
}

(globalThis as any).App = new App();
