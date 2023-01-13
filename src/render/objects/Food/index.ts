import WorldObject from "../WorldObject";
import WorldObjectModel from "../../../core/world/objects/WorldObject";

class Food extends WorldObject {
  constructor(
    worldObjectModel: WorldObjectModel,
    ctx: CanvasRenderingContext2D,
    squareWidthPx: number,
    squareHeightPx: number
  ) {
    super(worldObjectModel, ctx, squareWidthPx, squareHeightPx, "#000000");
    this.update();
  }

  onUpdate() {
    this.update();
  }
}

export default Food;
