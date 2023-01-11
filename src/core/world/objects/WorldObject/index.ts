import Square from "../../Square";

abstract class WorldObject {
  constructor(private shape: Square[]) {}

  getShape() {
    return this.shape;
  }
}

export default WorldObject;
