export class Ruta {
    constructor(_id = '', ruta = '', costopiso1 = '', costopiso2 = ''){
        this._id = _id;
        this.ruta = ruta;
        this.costopiso1 = costopiso1;
        this.costopiso2 = costopiso2;
    }

    _id: string;
    ruta:string;
    costopiso1:string;
    costopiso2: string;

}
