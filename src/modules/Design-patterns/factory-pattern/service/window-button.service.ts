import { Button } from '../interface';

export class WindowsButton implements Button {
  render(): void {
    console.log('Rending in windows style windows Button');
  }

  onclick(f: Function): void {
    console.log('Nativ OS click event ');
    f();
  }
}
