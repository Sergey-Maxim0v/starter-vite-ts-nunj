const utils = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
    let timeout: NodeJS.Timeout;

    return (...args: Parameters<F>): Promise<ReturnType<F>> =>
      new Promise((resolve) => {
        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => resolve(func(...args)), waitFor);
      });
  },

  // eslint-disable-next-line @typescript-eslint/ban-types
  throttle(func: Function, wait: number) {
    let isThrottled = false;
    let savedArgs: any;
    let savedThis: any;

    function wrapper(this: any, ...args: any[]) {
      if (isThrottled) {
        savedArgs = args;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        savedThis = this;
        return;
      }

      func.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedThis = savedArgs = null;
        }
      }, wait);
    }

    return wrapper;
  },

  isDesktopResolution() {
    return window.matchMedia('(min-width: 1024px)').matches;
  },
};

export default utils;
