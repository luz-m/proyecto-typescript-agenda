"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mail = /** @class */ (function () {
    /*Constructor*/
    function Mail(tipo, email) {
        this.tipo = tipo;
        this.email = email;
    }
    /*Métodos*/
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Mail.prototype.getMail = function () {
        return this.email;
    };
    Mail.prototype.setMail = function (email) {
        this.email = email;
    };
    return Mail;
}());
exports.Mail = Mail;
//# sourceMappingURL=mail.model.js.map