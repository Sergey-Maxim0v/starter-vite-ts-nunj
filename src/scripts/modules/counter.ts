import FillViteApp from './fill-vite-app.ts';

class SetupCounter {
  btn: HTMLButtonElement | null = null;
  counter: number = 0;

  constructor(appElement: HTMLDivElement | null) {
    this.setBtnElement(appElement?.querySelector<HTMLButtonElement>('#counter') ?? null);
    this.fillBtn();
    this.btn?.addEventListener('click', () => this.increment());
  }

  private setBtnElement(appElement: HTMLButtonElement | null) {
    this.btn = appElement;
  }

  increment() {
    this.counter++;
    this.fillBtn();
  }

  private fillBtn() {
    if (this.btn) {
      this.btn.innerHTML = `count is ${this.counter}`;
    }
  }
}

export default new SetupCounter(FillViteApp.appElement);
