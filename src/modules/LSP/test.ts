export class AreaCalculator {
  protected shapes: any[];
  constructor(shapes: any[] = []) {
    this.shapes = shapes;
  }
  public sum(): number[] {
    const data = this.shapes.map((shape) => shape.area);
    return data;
  }
}

export class VolumeCalaculator extends AreaCalculator {
  constructor(shapes: any[] = []) {
    super(shapes);
  }

  public sum(): number[] {
    const data = this.shapes.map((shape) => shape.volume);
    return data;
  }
}

export class SumCalculatorOutputter {
  protected calculator: AreaCalculator;

  constructor(calculator: AreaCalculator) {
    this.calculator = calculator;
  }

  public JSON(): string {
    const data = {
      sum: this.calculator.sum(),
    };

    return JSON.stringify(data);
  }

  public HTML(): string {
    return `
            <div>
                Sum of the areas of provided shapes: ${this.calculator.sum().join(', ')}
            </div>
        `;
  }
}

const areas = new AreaCalculator([{ area: 10 }, { area: 20 }]);
const volumes = new VolumeCalaculator([{ volume: 30 }, { volume: 40 }]);

const output = new SumCalculatorOutputter(areas);
const output2 = new SumCalculatorOutputter(volumes);

console.log(output.JSON());
console.log(output2.HTML());
