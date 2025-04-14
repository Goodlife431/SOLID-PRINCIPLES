import configuration from './libs/configuration';
import { Dialog } from './modules/Design-patterns/factory-pattern/dialog.abstract';
import { WebDialog } from './modules/Design-patterns/factory-pattern/web.dialog';
import { WindowsDialog } from './modules/Design-patterns/factory-pattern/windows.dialog';
import { DatabaseService } from './modules/Design-patterns/singleton/service/database.service';

const config = configuration();
export class AppService {
  private dialog: Dialog;

  private db = DatabaseService.getInstance();

  initialize(): void {
    if (config.app.os === 'Windows') {
      this.dialog = new WindowsDialog();
    } else if (config.app.os === 'Web') {
      this.dialog = new WebDialog();
    } else {
      throw new Error('Error! Unknown operating system.');
    }
  }

  hamdleQueries(){
    this.db.query("SELECT * FROM USERS");
    this.db.query("SELECT * from orders");
  }
}
