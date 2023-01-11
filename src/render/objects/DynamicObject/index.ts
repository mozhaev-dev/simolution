import WorldObject from "../../../core/world/objects/WorldObject";
import Loop from "../../../core/loop/Loop";
import Square from "../../../core/world/Square";

abstract class DynamicObject {
  private onUpdateCallback: () => void;
  private geometryShape: Square[] = [];

  constructor(
    private loop: Loop,
    protected worldObjectModel: WorldObject,
    protected ctx: CanvasRenderingContext2D,
    protected squareWidthPx: number,
    protected squareHeightPx: number,
    protected objectColor: string
  ) {
    this.onUpdateCallback = () => this.onUpdate.apply(this);
    this.loop.subscribe(this.onUpdateCallback);
  }

  abstract onUpdate(): void;

  clear() {
    this.geometryShape.forEach((square) => {
      this.ctx.clearRect(
        square.getLeftTop().x * this.squareWidthPx,
        square.getLeftTop().y * this.squareHeightPx,
        Number(this.squareWidthPx),
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

  destroy() {
    this.loop.unSubscribe(this.onUpdateCallback);
    this.clear();
  }
}

export default DynamicObject;
