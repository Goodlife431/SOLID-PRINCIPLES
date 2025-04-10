
interface ShapeInterface {
    area(): number;
}


interface ThreeDimensionalShapeInterface {
    volume(): number;
}


interface ManageShapeInterface {
    calculate(): number;
}


class Square implements ShapeInterface, ManageShapeInterface {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    public area(): number {
        return this.side * this.side;  
    }

    public calculate(): number {
        return this.area();  
    }
}


class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface, ManageShapeInterface {
    private length: number;
    private width: number;
    private height: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    public area(): number {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);  // Surface area of the cuboid
    }

    public volume(): number {
        return this.length * this.width * this.height; 
    }

    public calculate(): number {
        return this.area(); 
    }
}

// Example usage:
const square = new Square(5);
console.log(`Square area: ${square.calculate()}`);

const cuboid = new Cuboid(5, 3, 2);
console.log(`Cuboid surface area: ${cuboid.calculate()}`); 
console.log(`Cuboid volume: ${cuboid.volume()}`);  
