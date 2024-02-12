class PageLinks {
  elementLinkHome: HTMLElement | null = null;
  elementLinkVite: HTMLElement | null = null;
  baseUrl: string = '/';

  constructor() {
    this.elementLinkHome = document.querySelector('[data-page-link-home]');
    this.elementLinkVite = document.querySelector('[data-page-link-vite]');

    this.setBaseUrl();
    this.writeElementsHref();
  }

  writeElementsHref() {
    this.elementLinkHome?.setAttribute('href', `${this.baseUrl}`);
    this.elementLinkVite?.setAttribute('href', `${this.baseUrl}vite`);
  }

  setBaseUrl() {
    const href = window.location.href;

    if (href.includes('/vite')) {
      this.baseUrl = href.replace('/vite', '');
    } else {
      this.baseUrl = href;
    }

    if (this.baseUrl.at(-1) !== '/') {
      this.baseUrl += '/';
    }
  }
}

export default new PageLinks();
