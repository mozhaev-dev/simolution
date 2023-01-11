import DynamicObject from "../DynamicObject";
import WorldObject from "../../../core/world/objects/WorldObject";
import Loop from "../../../core/loop/Loop";

class Food extends DynamicObject {
  constructor(
    loop: Loop,
    worldObjectModel: WorldObject,
    ctx: CanvasRenderingContext2D,
    squareWidthPx: number,
    squareHeightPx: number
  ) {
    super(
      loop,
      worldObjectModel,
      ctx,
      squareWidthPx,
      squareHeightPx,
      "#000000"
    );
  }

  onUpdate() {
    console.log("food updated");

    this.update();
  }
}

export default Food;
