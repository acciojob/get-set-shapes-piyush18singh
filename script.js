// 1. Rectangle Class Definition
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate area
    getArea() {
        return this.width * this.height;
    }
}

// 2. Square Class Definition (Inherits from Rectangle)
class Square extends Rectangle {
    constructor(side) {
        // Calls the Rectangle constructor with side as both width and height
        super(side, side);
    }

    // Method specific to Square
    getPerimeter() {
        return 4 * this.width;
    }
}

// --- Testing the Implementation ---

// Create instances
const rect = new Rectangle(5, 10);
const sq = new Square(7);

// Function to display results on the HTML page
const resultsDiv = document.getElementById('results');

resultsDiv.innerHTML = `
    <div class="shape-result">
        <strong>Rectangle (5x10)</strong><br>
        Area: ${rect.getArea()}
    </div>
    <div class="shape-result">
        <strong>Square (Side: 7)</strong><br>
        Area: ${sq.getArea()}<br>
        Perimeter: ${sq.getPerimeter()}
    </div>
`;

// Also logging to console for debugging
console.log("Rectangle Width:", rect.width);
console.log("Square Area:", sq.getArea());
console.log("Square Perimeter:", sq.getPerimeter());

// Expose to window object for testing frameworks like Cypress
window.Rectangle = Rectangle;
window.Square = Square;