//importo un modulo con require en este caso un gestor de paquetes
//que es uuid que lo que hara sera darme un id aleatoriamente
//v4 significa que estoy importando la funcion 4 del paquete uuid
//y la estoy renombrando como uuidv4
import{v4 as uuidv4} from 'uuid';


//creo una funcion flecha llamada get uuid
export const getUUID = () => {
//y retorno lo que me contiene el paquete que renombre
//que lo que hara es generar un id unico asi que la funcion
//me devolvera un id unico
  return uuidv4();
}

//llamo al metodo module export
module.exports = {
  //y exporto la funcion getuuid
  //para usarlo dentro de otro codigo 
  getUUID,
}
