import Square from "../../../core/world/Square";
import WorldObjectModel from "../../../core/world/objects/WorldObject";

abstract class WorldObject {
  private geometryShape: Square[] = [];

  constructor(
    protected worldObjectModel: WorldObjectModel,
    protected ctx: CanvasRenderingContext2D,
    protected squareWidthPx: number,
    protected squareHeightPx: number,
    protected objectColor: string
  ) {
    this.worldObjectModel.onUpdate(this.update.bind(this));
  }

  abstract onUpdate(): void;

  clear() {
    this.geometryShape.forEach((square) => {
      this.ctx.clearRect(
        square.getLeftTop().x * this.squareWidthPx,
        square.getLeftTop().y * this.squareHeightPx,
        Number(this.squareWidthPx + 1),
        Number(this.squareHeightPx)
      );
    });

    this.geometryShape = [];
  }

  render() {
    const geometryShape = this.worldObjectModel.getShape();
    this.geometryShape = [...geometryShape];

    this.geometryShape.forEach((square) => {
      this.ctx.fillStyle = this.objectColor;
      this.ctx.fillRect(
        square.getLeftTop().x * this.squareWidthPx,
        square.getLeftTop().y * this.squareHeightPx,
        Number(this.squareWidthPx),
        Number(this.squareHeightPx)
      );
    });
  }

  update() {
    this.clear();
    this.render();
  }
}

export default WorldObject;
