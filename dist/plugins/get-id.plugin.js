"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
//importo un modulo con require en este caso un gestor de paquetes
//que es uuid que lo que hara sera darme un id aleatoriamente
//v4 significa que estoy importando la funcion 4 del paquete uuid
//y la estoy renombrando como uuidv4
const uuid_1 = require("uuid");
//creo una funcion flecha llamada get uuid
const getUUID = () => {
    //y retorno lo que me contiene el paquete que renombre
    //que lo que hara es generar un id unico asi que la funcion
    //me devolvera un id unico
    return (0, uuid_1.v4)();
};
exports.getUUID = getUUID;
//llamo al metodo module export
module.exports = {
    //y exporto la funcion getuuid
    //para usarlo dentro de otro codigo 
    getUUID: exports.getUUID,
};
