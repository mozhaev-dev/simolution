import Square from "../../Square";
import Grid from "../../Grid";
import DynamicObject from "../DynamicObject";
import Loop from "../../../loop/Loop";
import { getRandomInt } from "../../../../utils";

class Life extends DynamicObject {
  constructor(shape: Square[], private grid: Grid, loop: Loop) {
    super(shape, loop);
  }

  update() {
    this.randomMove();
  }

  randomMove() {
    const rand = getRandomInt(4);

    switch (rand) {
      case 0:
        this.moveRight();
        break;
      case 1:
        this.moveLeft();
        break;
      case 2:
        this.moveTop();
        break;
      case 3:
        this.moveBottom();
    }
  }

  moveRight() {
    const nextShape = this.shape.map((square) =>
      this.grid.getNextRightSquare(square)
    );
    if (nextShape.every((square) => square !== null)) {
      this.shape = nextShape as Square[];
    }
  }

  moveLeft() {
    const nextShape = this.shape.map((square) =>
      this.grid.getNextLeftSquare(square)
    );
    if (nextShape.every((square) => square !== null)) {
      this.shape = nextShape as Square[];
    }
  }

  moveTop() {
    const nextShape = this.shape.map((square) =>
      this.grid.getNextTopSquare(square)
    );
    if (nextShape.every((square) => square !== null)) {
      this.shape = nextShape as Square[];
    }
  }

  moveBottom() {
    const nextShape = this.shape.map((square) =>
      this.grid.getNextBottomSquare(square)
    );
    if (nextShape.every((square) => square !== null)) {
      this.shape = nextShape as Square[];
    }
  }
}

export default Life;
