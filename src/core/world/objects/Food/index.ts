import WorldObject from "../WorldObject";
import Square from "../../Square";

class Food extends WorldObject {
  constructor(shape: Square[]) {
    super(shape);
  }
}

export default Food;
