import { Button } from '../interface';

export class HTMLButton implements Button {
  render(): void {
    console.log('Rendering Html button ');
  }

  onclick(f: Function): void {
    console.log('Binding we browser  click event');
    f();
  }
}
