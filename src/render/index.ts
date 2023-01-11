import World from "../core/world/World";
import { Config } from "../types";
import { renderGrid } from "./Grid";
import Food from "./objects/Food";

export const init = (rootId: string, world: World, config: Config) => {
  const rootEl = document.getElementById(rootId);
  if (!rootEl) return;

  const canvasEl = document.createElement("canvas");
  canvasEl.setAttribute("id", "canvas");
  canvasEl.setAttribute("width", config.render.gridWidth);
  canvasEl.setAttribute("height", config.render.gridHeight);

  rootEl.append(canvasEl);
  const ctx = canvasEl.getContext("2d");

  if (!ctx) return;
  const gridModel = world.getGrid();

  const canvasWidthPx = canvasEl.clientWidth;
  const canvasHeightPx = canvasEl.clientHeight;

  const squareWidthPx = canvasWidthPx / gridModel.getAxisX().length;
  const squareHeightPx = canvasHeightPx / gridModel.getAxisY().length;

  renderGrid(
    ctx,
    gridModel,
    canvasWidthPx,
    canvasHeightPx,
    squareWidthPx,
    squareHeightPx,
    config
  );

  world
    .getFood()
    .map(
      (foodModel) =>
        new Food(world.getLoop(), foodModel, ctx, squareWidthPx, squareHeightPx)
    );
};
