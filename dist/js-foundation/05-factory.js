"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
;
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');
//creo una funcion flecha llamada buildmakeperson y le paso dos 
// funciones exportadas y con destructuring extraigo sus propiedades
const buildMakePerson = ({ getUUID, getAge }) => {
    //retorno un funcion anonima,
    // osea devuelvo dos valores name y birthdate 
    //que es donde pasare por argumento el nombre y el dia de cumpleaños
    //y con desestructuring extraigo sus propiedades
    return ({ name, birthdate }) => {
        //luego devuelvo
        return {
            //en el id:la funcion get uuid
            //que me dara un id aleatoriamente
            id: getUUID(),
            //nombre le agrego el parametro para almacenar el nombre 
            name: name,
            //birthdate le agrego el parametro para almacenar el dia de cumpleaños
            birthdate: birthdate,
            //age le agrego la funcion getage y le meto entre parentesis
            //el parametro birthdate para calcular la edad
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = buildPerson( obj );
// console.log(john);
