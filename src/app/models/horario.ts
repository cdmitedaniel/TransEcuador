export class Horario {
    constructor(_id = '', ruta = '', horasalida = '', chofer = '',placa=''){
        this._id = _id;
        this.ruta = ruta;
        this.horasalida = horasalida;
        this.chofer = chofer;
        this.placa = placa;

    }

    _id: string;
    ruta:string;
    horasalida:string;
    chofer: string;
    placa: string;


}
