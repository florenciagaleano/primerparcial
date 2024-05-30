export class Usuario {
    usuario : string;
    clave : string;
    esAdmin : boolean;
    constructor(usuario : string, clave : string, esAdmin : boolean){
        this.usuario = usuario;
        this.clave = clave;
        this.esAdmin = esAdmin;
    }
}
