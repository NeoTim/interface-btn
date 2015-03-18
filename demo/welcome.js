import {Ainterface} from 'interface'
export class Welcome{

  static inject(){
    return [Ainterface]
  }

  constructor(ainterface){
    this.interface = ainterface;
    this.heading = 'The Aurelia-Interface btn-Component';
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.btnColor='primary';
    this.btnSize='md';
    this.btnWaves='light';

  }

}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
