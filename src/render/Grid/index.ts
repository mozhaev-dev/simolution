import Grid from "../../core/world/Grid";
import { Config } from "../../types";

export const renderGrid = (
  ctx: CanvasRenderingContext2D,
  gridModel: Grid,
  canvasWidthPx: number,
  canvasHeightPx: number,
  squareWidthPx: number,
  squareHeightPx: number,
  config: Config
) => {
  const gridColor = config.render.gridColor;

  ctx.strokeStyle = gridColor;
  gridModel.getAxisX().forEach((axisXItem) => {
    const xCoord = axisXItem * squareWidthPx;
    ctx.beginPath();
    ctx.moveTo(xCoord, 0);
    ctx.lineTo(xCoord, canvasHeightPx);
    ctx.stroke();
  });

  gridModel.getAxisY().forEach((axisYItem) => {
    const yCoord = axisYItem * squareHeightPx;
    ctx.beginPath();
    ctx.moveTo(0, yCoord);
    ctx.lineTo(canvasWidthPx, yCoord);
    ctx.stroke();
  });
};
