import Square from "../Square";
import { Point } from "../types";
import { getRandomInt } from "../../../utils";

class Grid {
  private axisX: number[];
  private axisY: number[];
  private grid: Square[][];

  constructor(width: number, height: number) {
    this.axisX = [...Array(width).keys()].map((item, index) => index);
    this.axisY = [...Array(height).keys()].map((item, index) => index);

    this.grid = this.axisY.map((yCoord) =>
      this.axisX.map((xCoord) => new Square({ x: xCoord, y: yCoord }))
    );
  }

  checkPointBelongsToGrid(point: Point) {
    return (
      point.x >= this.axisX[0] &&
      point.x <= this.axisX[this.axisX.length - 1] &&
      point.y >= this.axisY[0] &&
      point.y <= this.axisY[this.axisY.length - 1]
    );
  }

  getSquare(leftTopPoint: Point) {
    if (this.checkPointBelongsToGrid(leftTopPoint)) {
      return this.grid[leftTopPoint.y][leftTopPoint.x];
    }
    return null;
  }

  getRandomSquare() {
    const leftTopPoint: Point = {
      x: getRandomInt(this.axisX[this.axisX.length - 1]),
      y: getRandomInt(this.axisY[this.axisY.length - 1]),
    };

    return this.getSquare(leftTopPoint);
  }

  getNextRightSquare(square: Square) {
    const nextSquareRightTopPoint = {
      x: square.getRightTop().x + 1,
      y: square.getRightTop().y,
    };
    return this.getSquare(nextSquareRightTopPoint);
  }

  getNextLeftSquare(square: Square) {
    const nextSquareLeftTopPoint = {
      x: square.getLeftTop().x - 1,
      y: square.getLeftTop().y,
    };
    return this.getSquare(nextSquareLeftTopPoint);
  }

  getNextTopSquare(square: Square) {
    const nextSquareLeftTopPoint = {
      x: square.getLeftTop().x,
      y: square.getLeftTop().y + 1,
    };
    return this.getSquare(nextSquareLeftTopPoint);
  }

  getNextBottomSquare(square: Square) {
    const nextSquareLeftBottomPoint = {
      x: square.getLeftBottom().x,
      y: square.getLeftBottom().y - 1,
    };
    return this.getSquare(nextSquareLeftBottomPoint);
  }
}

export default Grid;
