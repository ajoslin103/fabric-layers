/**
 * Point class extending fabric.Point with additional functionality
 * @param {number|{x: number, y: number}|Array<number>} x - X coordinate or point object/array
 * @param {number} [y] - Y coordinate if first parameter is a number
 */
export class Point extends fabric.Point {
  /**
   * @param {number|{x: number, y: number}|Array<number>} x - X coordinate or point object/array
   * @param {number} [y] - Y coordinate if first parameter is a number
   */
  constructor(x, y) {
    let xCoord = 0;
    let yCoord = 0;

    if (arguments.length > 1) {
      xCoord = Number(x) || 0;
      yCoord = Number(y) || 0;
    } else if (!x) {
      [xCoord, yCoord] = [0, 0];
    } else if (typeof x === 'object') {
      if ('x' in x && 'y' in x) {
        xCoord = Number(x.x) || 0;
        yCoord = Number(x.y) || 0;
      } else if (Array.isArray(x) && x.length >= 2) {
        xCoord = Number(x[0]) || 0;
        yCoord = Number(x[1]) || 0;
      }
    }

    super(xCoord, yCoord);
  }

  /**
   * Set the X coordinate
   * @param {number} x - The X coordinate
   */
  setX(x) {
    this.x = Number(x) || 0;
  }

  /**
   * Set the Y coordinate
   * @param {number} y - The Y coordinate
   */
  setY(y) {
    this.y = Number(y) || 0;
  }

  /**
   * Copy coordinates from another point
   * @param {Point|{x: number, y: number}} point - The point to copy from
   */
  copy(point) {
    if (point && typeof point === 'object' && 'x' in point && 'y' in point) {
      this.x = Number(point.x) || 0;
      this.y = Number(point.y) || 0;
    }
  }

  /**
   * Get coordinates as an array
   * @returns {[number, number]} Array containing [x, y] coordinates
   */
  getArray() {
    return [this.x, this.y];
  }
}

/**
 * Factory function to create a new Point
 * @param {number|{x: number, y: number}|Array<number>} x - X coordinate or point object/array
 * @param {number} [y] - Y coordinate if first parameter is a number
 * @returns {Point} A new Point instance
 */
export const point = (x, y) => new Point(x, y);
