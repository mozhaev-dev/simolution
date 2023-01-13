import DynamicObject from "../WorldObject";
import DynamicObjectModel from "../../../core/world/objects/DynamicObject";

class Life extends DynamicObject {
  constructor(
    worldObjectModel: DynamicObjectModel,
    ctx: CanvasRenderingContext2D,
    squareWidthPx: number,
    squareHeightPx: number
  ) {
    super(worldObjectModel, ctx, squareWidthPx, squareHeightPx, "#008000");
    this.render();
  }

  onUpdate() {
    this.update();
  }
}

export default Life;
