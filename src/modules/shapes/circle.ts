export class Circle implements Shape {
  constructor(private radius: number) {}
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  constructor(private length: number) {}
  getArea(): number {
    return this.length * this.length;
  }
}

interface Shape {
  getArea(): number;
}

export class AreaCalculator {
  private shapes: Shape[];

  constructor(shapes: Shape[] = []) {
    this.shapes = shapes;
  }

  // Optional: method to calculate total area
  public totalArea(): number {
    return this.shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
  }

  output() {
    return `Sum of the areas of provided shapes: ${this.totalArea()}`;
  }
}

// Usage
const shapes = [new Circle(2), new Square(5), new Square(6)];

const areas = new AreaCalculator(shapes);
console.log(areas.output());

// In this class i implemented polymorphism, encapsulation, Open and closed principle
