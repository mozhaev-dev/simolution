import Grid from "../Grid";
import Loop from "../../loop/Loop";
import Food from "../objects/Food";
import Life from "../objects/Life";
import WorldObject from "../objects/WorldObject";
import Square from "../Square";

class World {
  private food: Food[] = [];
  private life: Life[] = [];

  constructor(private grid: Grid, private loop: Loop) {}

  createRandomSquares(amount: number) {
    return [...Array(amount).keys()].reduce<Square[]>((acc) => {
      const iter = (objectsCollection: WorldObject[]): Square | null => {
        const square = this.grid.getRandomSquare();

        if (!square) return null;
        if (
          objectsCollection.find((item) => {
            const foodItemLeftTopPoint = item.getShape()[0].getLeftTop();
            const squareLeftTopPoint = square.getLeftTop();
            return (
              foodItemLeftTopPoint.x === squareLeftTopPoint.x &&
              foodItemLeftTopPoint.y === squareLeftTopPoint.y
            );
          })
        ) {
          return iter(objectsCollection);
        }
        return square;
      };

      const square = iter([...this.food, ...this.life]);

      if (square) {
        acc.push(square);
      }

      return acc;
    }, []);
  }

  createRandomFood(amount = 1) {
    this.food = this.createRandomSquares(amount).map(
      (square) => new Food([square])
    );
  }

  createRandomLife(amount = 1) {
    this.life = this.createRandomSquares(amount).map(
      (square) => new Life([square], this.grid, this.loop)
    );
  }

  getGrid() {
    return this.grid;
  }

  getFood() {
    return this.food;
  }

  getLife() {
    return this.life;
  }

  getLoop() {
    return this.loop;
  }
}

export default World;
