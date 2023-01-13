import Square from "../../Square";

abstract class WorldObject {
  protected onUpdateSubscribeCallback: (() => void) | null = null;

  constructor(protected shape: Square[]) {}

  getShape() {
    return this.shape;
  }

  onUpdate(callback: () => void) {
    this.onUpdateSubscribeCallback = callback;
  }
}

export default WorldObject;
