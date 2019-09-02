export class Pago {
    constructor(_id = '', usuario = '', nombretarjeta = '',numerotarjeta = ''){
        this._id = _id;
        this.usuario = usuario;
        this.nombretarjeta = nombretarjeta;
        this.numerotarjeta = numerotarjeta;
       
    }

    _id: string;
    usuario:string;
    nombretarjeta:string;
    numerotarjeta: string;
  

}
