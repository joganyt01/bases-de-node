"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
//defino un array llamado users
//que me contendra dos objetos
const users = [
    //agrego dos obejtos
    {
        //uno es un usuario
        //que me contiene un id y un name
        id: 1,
        name: 'John Doe',
    },
    //otro es el usuario 2
    {
        //contiene id y name
        id: 2,
        name: 'Jane Doe',
    }
];
//defino una funcion flecha llamada getuserid y le
//paso dos argumentos un id y un callback 
const getUserById = (id, callback) => {
    //llamo al array users y con el metodo find busco en el arrray
    //y le digo que me cree una funcion flecha  que se ejecutara 
    //en cada elemento del array y recibe un elemento user del array
    //  luego con arrow comparo si el id de user es
    //igual al id de mi funcion  si encuentra una concidencia devuelve
    //el objeto user si no hay concidiencia devuelve indefined esto
    //  se hace con el metodo find
    //y almaceno el resultado en la constante user
    const user = users.find((user) => user.id === id);
    //etonces si 
    (user)
        //si user existe llama a callback null user
        ? callback(null, user)
        //si no existe llama a callback user not found
        : callback(`User not found with id ${id}`);
};
exports.getUserById = getUserById;
//exporto la funcion
