type LoopCallback = () => void;

class Loop {
  private interval: number;
  private timer: NodeJS.Timer;
  private listeners: LoopCallback[] = [];

  constructor(callBack: LoopCallback, interval: number) {
    this.interval = interval;

    const multiplier = 1000;
    this.timer = setInterval(() => {
      this.listeners.forEach((listener) => listener());
      callBack();
    }, this.interval * multiplier);
  }

  subscribe(loopCallback: LoopCallback | LoopCallback[]) {
    if (Array.isArray(loopCallback)) {
      this.listeners = [...this.listeners, ...loopCallback];
    }
  }

  unSubscribe(loopCallback: LoopCallback) {
    const index = this.listeners.findIndex(
      (listener) => listener === loopCallback
    );
    const deleteCount = 1;
    this.listeners.splice(index, deleteCount);
  }

  destroy() {
    clearInterval(this.timer);
  }
}

export default Loop;
