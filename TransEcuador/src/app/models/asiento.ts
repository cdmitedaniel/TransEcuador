export class Asiento {
    constructor(_id = '', horario = '', usuario = '',asiento1 = 0,asiento2=0,asiento3=0,asiento4=0,dia=''){
        this._id = _id;
        this.horario = horario;
        this.usuario = usuario;
        this.asiento1 = asiento1;
        this.asiento2 = asiento2;
        this.asiento3 = asiento3;
        this.asiento4 = asiento4;
        this.dia = dia;

    }

    _id: string;
    horario:string;
    usuario:string;
    asiento1: Number;
    asiento2: Number;
    asiento3: Number;
    asiento4: Number;
    dia: string;


}
