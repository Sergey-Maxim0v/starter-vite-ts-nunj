export interface ISignal {
  handler: () => void;
  context: string;
}

class Signal {
  private handlers: ISignal[] = [];

  public add(handler: ISignal['handler'], context: ISignal['context']) {
    this.handlers.push({ handler: handler, context: context });
    return handler;
  }

  public remove(handler: ISignal['handler']) {
    const index = this.handlers.findIndex((item) => item.handler === handler);
    if (index !== -1) {
      this.handlers.splice(index, 1);
      return handler;
    }
    return null;
  }

  public call() {
    this.handlers.forEach(({ handler, context }) => {
      handler.apply(context || null);
    });
  }

  public delayedCall(delay: number = 16) {
    delay = delay || 100;

    setTimeout(() => {
      this.call();
    }, delay);
  }
}

export default Signal;
