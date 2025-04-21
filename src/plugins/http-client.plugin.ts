//importo un paquete llamado axios del modulo axios
//que lo que hace es solicitudes http basado en promesas
import axios from "axios";
//exporto una constante que me almacena
//un conjunto de metodos llamado httpclientplugin
export const httpClientPlugin = {
  //inserto el metodo get de una promesa
  //agrego una funcion flecha que sera asincronica
  //y tendra  como arguemento un url que sera de tipo
  //string, hace una solicitud http get a ese URL
  get: async (url: string) => {
    //dentro de ella declaro una constante
    //llamada data y le digo que solo extraiga la propiedad
    //data y ahi almacenare lo siguiente
    //le digo que con await espere a que con la funcion
    //axios.get me haga una solicitud ala url que inserte
    //ala funcion que agregue
    const { data } = await axios.get(url);
    //finalmente devuelvo lo que almacene en data
    return data;     
  },
 //inserto el metodo post y agrego una funcion
 //que tiene como argumento una url de tipo string y un
 //body de tipo null
  post: async (url: string, body: null) => {
    //dentro de ella agrego un throw new error
    //que diga no implimetado esto signfica que no 
    //implemento ningun post (correo)
    throw new Error('Not implemented');
  },
  //inserto el metodo put y agrego una funcion
 //que tiene como argumento una url de tipo string y un
 //body de tipo null
  put: async (url: string, body: null) => {
    //dentro de ella agrego un throw new error
    //que diga no implimetado esto signfica que no 
    //implemento ningun put
    throw new Error('Not implemented');
  },
  //inserto el metodo delete y agrego una funcion
 //que tiene como argumento una url de tipo string
  delete: async (url: string) => {
    //dentro de ella agrego un throw new error
    //que diga no implimetado esto signfica que no 
    //implemento ningun delete
    throw new Error('Not implemented');
  },

};


