class PageLinks {
  elementLinkHome: HTMLElement | null = null;
  elementLinkVite: HTMLElement | null = null;
  elementLinkComponents: HTMLElement | null = null;
  baseUrl: string = '/';

  constructor() {
    this.elementLinkHome = document.querySelector('[data-page-link-home]');
    this.elementLinkVite = document.querySelector('[data-page-link-vite]');
    this.elementLinkComponents = document.querySelector('[data-page-link-components]');

    this.setBaseUrl();
    this.writeElementsHref();
  }

  writeElementsHref() {
    this.elementLinkHome?.setAttribute('href', `${this.baseUrl}`);
    this.elementLinkVite?.setAttribute('href', `${this.baseUrl}vite`);
    this.elementLinkComponents?.setAttribute('href', `${this.baseUrl}components`);
  }

  setBaseUrl() {
    const href = window.location.href;

    if (href.includes('/vite')) {
      this.baseUrl = href.replace('/vite', '');
    } else if (href.includes('/components')) {
      this.baseUrl = href.replace('/components', '');
    } else {
      this.baseUrl = href;
    }

    if (this.baseUrl.at(-1) !== '/') {
      this.baseUrl += '/';
    }
  }
}

export default new PageLinks();
