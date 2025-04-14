import { Button } from './interface/button.interface';

export abstract class Dialog {
  abstract createButton(): Button;

  render(): void {
    const okButton = this.createButton();
    okButton.onclick(() => this.closeDialog);
  }

  closeDialog(): void {
    console.log('Dialog closed');
  }
}
