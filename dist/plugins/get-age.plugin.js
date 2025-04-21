"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
//importo el paquete get age con require
//y lo almaceno en mi constante getageplugin
// const getAgePlugin = require('get-age');
//creo una funcion llamada get age y le paso como parametro
//brithdate la fecha de nacimiento de la persona
const getAge = (birthdate) => {
    //ahora le digo que si no tiene la fecha de cumple
    //me retorne un error que diga birthdate es requerida
    //console.log({currentYear: new Date().getFullYear()})
    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
