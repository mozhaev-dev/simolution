import WorldObject from "../WorldObject";
import Square from "../../Square";
import Loop from "../../../loop/Loop";

abstract class DynamicObject extends WorldObject {
  private updateCallback: () => void;

  constructor(shape: Square[], private loop: Loop) {
    super(shape);

    this.updateCallback = () => {
      requestIdleCallback(this.update.bind(this));

      if (this.onUpdateSubscribeCallback !== null) {
        requestIdleCallback(this.onUpdateSubscribeCallback);
      }
    };

    loop.subscribe(this.updateCallback);
  }

  abstract update(): void;

  destroy() {
    this.loop.unsubscribe(this.updateCallback);
  }
}

export default DynamicObject;
