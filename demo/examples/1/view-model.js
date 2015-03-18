export class BtnComponent{

    static inject(){
        return [Element];
    }
    constructor(element){
        this.element = element;
        this.btnColor='primary';
        this.btnSize='md';
        this.btnWaves='light';
    }
}
