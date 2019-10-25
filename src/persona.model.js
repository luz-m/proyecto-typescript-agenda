"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    /*Constructor*/
    function Persona(nombre, apellidos, edad, dni, cumple, color, sexo, direcciones, mails, telefonos, notas) {
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
    Persona.prototype.addMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.addDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.addTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=persona.model.js.map