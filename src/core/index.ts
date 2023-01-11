import { Config } from "../types";
import Grid from "./world/Grid";
import Loop from "./loop/Loop";
import World from "./world/World";

export const init = (config: Config) => {
  const grid = new Grid(config.world.width, config.world.height);
  const loop = new Loop(() => {
    console.log("loop tick");
  }, config.world.timeSpeed);
  const world = new World(grid, loop);
  world.createRandomFood(config.world.food);

  return world;
};
