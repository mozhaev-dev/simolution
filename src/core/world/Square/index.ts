import { Point } from "../types";

class Square {
  private leftTop: Point;
  private rightTop: Point;
  private leftBottom: Point;
  private rightBottom: Point;

  constructor(leftTopPoint: Point) {
    this.leftTop = leftTopPoint;
    this.rightTop = { ...leftTopPoint, x: leftTopPoint.x + 1 };
    this.leftBottom = { ...leftTopPoint, y: leftTopPoint.y + 1 };
    this.rightBottom = { x: leftTopPoint.x + 1, y: leftTopPoint.y + 1 };
  }

  getLeftTop() {
    return this.leftTop;
  }

  getRightTop() {
    return this.rightTop;
  }

  getLeftBottom() {
    return this.leftBottom;
  }

  getRightBottom() {
    return this.rightBottom;
  }
}

export default Square;
