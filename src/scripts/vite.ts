import FillViteApp from './modules/fill-vite-app.ts';
import SetupCounter from './modules/counter.ts';

class ViteApp {
  modules = {};

  constructor() {
    this.modules = { FillViteApp, SetupCounter };
  }
}

(globalThis as any).ViteApp = new ViteApp();
