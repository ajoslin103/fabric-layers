import { fabric } from 'fabric-pure-browser';

export class Point extends fabric.Point {
  constructor(x: number = 0, y: number = 0) {
    super(x, y);
  }

  public clone(): Point {
    return new Point(this.x, this.y);
  }

  public add(that: Point): Point {
    return new Point(this.x + that.x, this.y + that.y);
  }

  public subtract(that: Point): Point {
    return new Point(this.x - that.x, this.y - that.y);
  }

  public multiply(scalar: number): Point {
    return new Point(this.x * scalar, this.y * scalar);
  }

  public divide(scalar: number): Point {
    return new Point(this.x / scalar, this.y / scalar);
  }

  public magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public normalize(): Point {
    const mag = this.magnitude();
    return mag !== 0 ? this.divide(mag) : new Point();
  }

  public distance(that: Point): number {
    return this.subtract(that).magnitude();
  }

  public equals(that: Point): boolean {
    return this.x === that.x && this.y === that.y;
  }

  public angle(): number {
    return Math.atan2(this.y, this.x);
  }

  public rotate(angle: number): Point {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Point(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }

  public toArray(): [number, number] {
    return [this.x, this.y];
  }

  public toString(): string {
    return `Point(${this.x}, ${this.y})`;
  }
}
