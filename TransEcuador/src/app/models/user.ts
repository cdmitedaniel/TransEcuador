export class User {
    constructor(_id = '', nombre = '', apellido = '', nacimiento = '', email = '', password = '',direccion='', telefono = '', cedula='',ciudad=''){
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.telefono = telefono;
        this.cedula = cedula;
        this.ciudad = ciudad;
    }

    _id: string;
    nombre:string;
    apellido:string;
    nacimiento: string;
    email: string;
    password: string;
    direccion:string;
    telefono:string;
    cedula:string;
    ciudad:string;

}
