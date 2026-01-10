class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive numbers");
    }
    this._width = width;
    this._height = height;
  }

  // getter for width
  get width() {
    return this._width;
  }

  // getter for height
  get height() {
    return this._height;
  }

  // method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive number");
    }
    super(side, side);
  }

  // method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

/* Make classes global for Cypress tests */
window.Rectangle = Rectangle;
window.Square = Square;

/* Example test in console */
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);      // 5
console.log(rectangle.height);     // 10
console.log(rectangle.getArea());  // 50

const square = new Square(7);
console.log(square.width);         // 7
console.log(square.height);        // 7
console.log(square.getArea());     // 49
console.log(square.getPerimeter()); // 28
