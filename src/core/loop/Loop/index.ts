export type LoopTick = "loopTick";
type LoopCallback = () => void;

class Loop {
  private interval: number;
  private timer: NodeJS.Timer;
  private loopTickEventName: LoopTick = "loopTick";

  constructor(callback: LoopCallback, interval: number) {
    this.interval = interval;

    this.timer = setInterval(() => {
      window.dispatchEvent(new CustomEvent(this.loopTickEventName));
      callback();
    }, this.interval * 1000);
  }

  subscribe(callback: LoopCallback) {
    window.addEventListener(this.loopTickEventName, callback);
  }

  unsubscribe(callback: LoopCallback) {
    window.removeEventListener(this.loopTickEventName, callback);
  }

  destroy() {
    clearInterval(this.timer);
  }
}

export default Loop;
