import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {Ainterface} from 'interface';

export class App {
  static inject() { return [Router, Ainterface]; }
  constructor(router, ainterface) {
    this.interface = ainterface;
    console.log(this.interface)
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia-Interface';
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
      ]);
    });
  }
}
