import { Direccion } from "./direccion.model";
import { Mail } from "./mail.model";
import { Telefono } from "./telefono.model";

export class Persona{

    /*Atributos*/
    nombre:string;
    apellidos:string;
    edad:number;
    dni:string;
    cumple:Date;
    color:string;
    sexo:string;
    direcciones:Array<Direccion>;
    mails:Array<Mail>
    telefonos:Array<Telefono>
    notas:string;

    /*Constructor*/
    constructor(nombre:string, apellidos:string, edad:number, dni:string, cumple:Date, color:string, sexo:string, 
        direcciones:Array<Direccion>, mails:Array<Mail>, telefonos:Array<Telefono>, notas:string){
        
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.dni = dni;
            this.cumple = cumple;
            this.color = color;
            this.sexo = sexo;
            this.direcciones = direcciones;
            this.mails = mails;
            this.telefonos = telefonos;
            this.notas = notas;
        }
    
    /*Métodos*/
    addMail(mail:Mail){
        this.mails.push(mail);
    }

    addDireccion(direccion:Direccion){
        this.direcciones.push(direccion);
    }

    addTelefono(telefono:Telefono){
        this.telefonos.push(telefono);
    }

}