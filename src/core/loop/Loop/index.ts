type LoopCallback = () => void;

class Loop {
  private interval: number;
  private timer: NodeJS.Timer;
  private listeners: LoopCallback[] = [];

  constructor(callBack: LoopCallback, interval: number) {
    this.interval = interval;

    this.timer = setInterval(() => {
      this.listeners.forEach((listener) => listener());
      callBack();
    }, this.interval * 1000);
  }

  subscribe(loopCallback: LoopCallback) {
    this.listeners.push(loopCallback);
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
