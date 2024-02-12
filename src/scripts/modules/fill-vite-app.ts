import VITE_CONTENT from '../constants/vite-content.ts';

export class FillViteApp {
  appElement: HTMLDivElement | null = null;
  content: string = '';

  constructor() {
    this.appElement = document.querySelector<HTMLDivElement>('#app');
    this.setContent(VITE_CONTENT);
    this.fill();
  }

  setContent(str: string) {
    this.content = str;
  }

  fill() {
    if (this.appElement) {
      this.appElement.innerHTML = this.content;
    }
  }
}

export default new FillViteApp();
