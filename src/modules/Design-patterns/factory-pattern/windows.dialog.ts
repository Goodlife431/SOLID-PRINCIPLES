import { Dialog } from './dialog.abstract';
import { Button } from './interface';
import { WindowsButton } from './service/window-button.service';

export class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}
