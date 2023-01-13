import World from "../core/world/World";
import { Config } from "../types";
import Food from "./objects/Food";
import Life from "./objects/Life";

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

  const food = world
    .getFood()
    .map(
      (foodModel) => new Food(foodModel, ctx, squareWidthPx, squareHeightPx)
    );
  console.log(food);

  const life = world
    .getLife()
    .map(
      (lifeModel) => new Life(lifeModel, ctx, squareWidthPx, squareHeightPx)
    );
  console.log(life);
};
