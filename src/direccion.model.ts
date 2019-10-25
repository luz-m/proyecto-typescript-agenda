export class Direccion{

    /*Atributos*/
    calle:string;
    numero:number;
    piso:number;
    letra:string;
    cp:number;
    poblacion:string;
    provincia:string;

    /*Constructor*/
    constructor(calle:string, numero:number, piso:number, letra:string, cp:number, poblacion:string, provincia: string){
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.cp = cp;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

}