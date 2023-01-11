export type Config = {
  world: {
    width: number;
    height: number;
    timeSpeed: number;
    food: number;
  };
  render: { gridColor: string; gridWidth: string; gridHeight: string };
};
