import { Dialog } from './dialog.abstract';
import { Button } from './interface';
import { HTMLButton } from './service/html-button.service';

export class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}
