import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade';
import type { BodyScrollOptions } from 'body-scroll-lock-upgrade';

class ScrollLocker {
  isLock = false;

  disable(targetElement: HTMLElement, options?: BodyScrollOptions) {
    if (this.isLock || !targetElement) {
      return;
    }

    this.isLock = true;

    disableBodyScroll(targetElement, options);
  }

  enable(targetElement: HTMLElement) {
    if (!this.isLock) {
      return;
    }

    this.isLock = false;

    enableBodyScroll(targetElement);
  }

  clear() {
    this.isLock = false;

    clearAllBodyScrollLocks();
  }
}

export default new ScrollLocker();
