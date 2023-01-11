import Grid from "../Grid";
import Loop from "../../loop/Loop";
import Food from "../objects/Food";

class World {
  private food: Food[] = [];
  constructor(private grid: Grid, private loop: Loop) {}

  createRandomFood(amount = 1) {
    this.food = [...Array(amount).keys()].reduce<Food[]>((acc) => {
      const iter = (food: Food[]): Food | null => {
        const square = this.grid.getRandomSquare();

        if (!square) return null;
        if (
          food.find((foodItem) => {
            const foodItemLeftTopPoint = foodItem.getShape()[0].getLeftTop();
            const squareLeftTopPoint = square.getLeftTop();
            return (
              foodItemLeftTopPoint.x === squareLeftTopPoint.x &&
              foodItemLeftTopPoint.y === squareLeftTopPoint.y
            );
          })
        ) {
          return iter(food);
        }
        return new Food([square]);
      };

      const food = iter(acc);

      if (food) {
        acc.push(food);
      }

      return acc;
    }, []);
  }
}

export default World;
