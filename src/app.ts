//const winston = require('winston/lib/winston/config');
//const { getAge, getUUID } = require('./plugins');
// const getAge = require('get-age');
// const plugin=require('./plugins');


import { getAge, getUUID, httpClientPlugin as http} from "././plugins";
import { getUserBy } from "././js-foundation/03-callbacks";
import { example } from "././js-foundation/01-template";
import  fs from "fs/promises";
import  path from "path";
import { error } from "console";
import { text } from "stream/consumers";

import axios from "axios";
import { promises } from "dns";
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')
//const getPokemonById = require('./js-foundation/06-promises');

// console.log(getAge('2001-10-01'));

// const{buildLogger}=require('./plugins');

//importo una libreria con require en este caso una que esta en el 
//mismo archivo que estoy trabajando llamado plugins desde ahi
//llamo a un archivo dentro que se llame index
//luego desestructuro el codigo buildconst para importar el codigo exportado
//desde ese index
//const {buildconst}=require('./plugins');
//ahora llamo a la funcion buildconst y le paso adentro el archivo 
//app.js que es el argumento que paso
//para que cuando me vote algun error
//este me muestre por service donde proviene los logs
//en este caso desde el crhivo app.js
//const loggere=buildconst('app.js');
//llamo a loggere donde esta almacenada la funcion buildconst
//y le agrego el metodo .log de la funcion buildconst y le paso
//como argumento nueva funcionando para que me muestre esto por consola
//loggere.log('Nueva Funcionando');
//llamo a loggere y le agrego .error que es un metodo de la funcion
//  buildconst que estoy importando
//y como argumento le paso error nuevo esto hara que 
// me imprima eso por consola
//loggere.error('Error nuevo');

//getPokemonById(4)
//.then( ( pokemon ) => console.log({ pokemon }) )
//.catch( ( err ) => console.error//( err ) )
// .finally( () => console.log('Finalmente') );



// token de acceso
// Publicas


// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson../../date: '1985-10-21' };

// const john = makePerson( obj );

// console.log({ john });
//const id=getUUID();

//const name='johan';

//const johen=example(name,id);

//console.log(johen)
//creo una variable llamado patchtex y con la funcion
//path.join() combino rutas en este caso dirname y el nombre
//del archivo se concatenan, dirname es una variable global
//que representa la ruta del directorio(app.js) y data.txt
//es el nombre del archivo
//const patchTexto=path.join(__dirname,'data.txt');
//hago lo mismo pero con data1.txt
//const patchtex=path.join(__dirname,'data1.txt');
//declaro una constante que almacena una funcion anononima
//la funcion flecha sera utlizada para crear un archivo
//indico que sera asincronica es decir usare dentro de ella await
//y hare operaciones que tomen tiempo osea leer un archivo
//sin bloquear la ejecucion del programa
/*
const readfileFunc=async()=>{
   //agrego un try osea un manejador de errores
   //que intenta ejecutar un bloque de codigo
    try{
        //con await detengo la ejecucion del codigo y con la funcion
        // fs.acces  verifico si el archivo existe
        //  y si tengo permisos
        //para acceder a el si el archivo existe data.txt el programa
        //sigue normalmente si no existe lanza un error el try
        //lo captura y ejecuta el catch
        await fs.access(patchTexto);
         //declaro una constante llamada texto 
         // donde con await
         //le digo que espere a que la operacion del archivo termine
         //con la funcion fs.readfile lee el archivo patchtexto
         //y enseguida en utf9 especifico el tipo de decodificacion en que 
         //esta el archivo osea que se leera como un texto en vez de un 
         //buffer
        const texto = await fs.readFile(patchTexto, "utf8");
        //finalmente muestro por consola
        console.log(texto);
        //con catch atrapo el error si en este caso en el try
        //no existe el archivo inmediatamente esto se activa
        //y le paso como argumento la variable llamado err
        //que al ponerlo dentro de un console me mostrara 
        //un mensaje de error
        
    }catch(err){
        //muestro por consola el archivo no existe y le concanteno la
        //variable err
        console.log('el archivo no existe',err)
        //inmediatamente se ejecutara la funcion createfile
        //que me creara un archivo txt llamado data1
        createfileFunc();
    }
       
};
//declaro una constante que me almacenara una funcionanonima
//que me creara el archivo data1.txt le digo que sera asincronica es decir
//usare await osea hare operaciones no bloqueantes que tomaran tiempo
//pero que no bloquearan el codigo
const createfileFunc=async()=>{
    //agrego un manejador de errores osea intentare ejecutar
    //el codigo sin bloquearlo
    try {
        //uso await osea espero a que con la funcion fswrite
        //escriba en un archivo en este caso el que se almacena en la variable patchtext
        //enseguida le paso el texto que quiero que escriba es un
        //nuevo archivo y enseguida en utf8 le indico la codificacion
        //en que quiero el archivo es decir archivo de texto
        await fs.writeFile(patchtex, 'Es un nuevo archivo', 'utf8'); // No retorna nada
        //imprimo por consola lo siguiente archivo creado con exito
        console.log('Archivo creado con éxito.');
       //agrego el catch si hay un error para que me lo capture
       //en este caso si ya hay un archivo existente y dentro del catch
       //agrego la variable error donde me mostrara con detalle el error 
    } catch (error) {
        //muestro por consola si hay un error el mensaje error al crear el archivo
        //y enseguida coloco la variable error que es el argumento que le pase al catch
        //donde me mostrara con detalle el error
        console.error('Error al crear el archivo:', error);
    }
    
}
//coloco la funcion afuera de todo el script para que 
//inmediatamente se ejecute la funcion con los parentesis
readfileFunc();
*/


//declaro una constnate que almacenara
//una funcion de tipo flecha y sera asincronica
//enseguida le digo que me devolvera una promesa que
//cuando se resuelva tendra un valor de tipo string
const solicitedUrl=async():Promise<string>=>{

//inserto un manejador de errores osea intento
//ejecutar un bloque de codigo con try
    try{
        //decalro una constante donde guardare un url
       const url=`https://jsonplaceholder.typicode.com/todos/1`;
       //decalro otra constante y le digo que co await espere a que
       //http.get haga una consulta a la url
       const johan=await http.get(url);
       //y luego retorno osea devuelvo el title de la api
       return johan.title;
       //si esto no se cumple automitacmente pasa a catch
       //atrapa el error
       //y meto como argumento el error que es un variable
    }catch(err){
        //inmediatamente muestra el mensaje que tengo
        //en el throw y le coloco enseguida la variable de error
        //para que explique con etalle el error
      throw`title anda completed not found with,${err}`
    }
  
  
  

}
//llamo a la funcion solicitud y con then le digo que
//cuando se cumpla la promesas inmediatamente se ejecutara lo que
//then que es un callback que contiene 
// el resultado de la promesa como argumento y 
//me imprimira por consola dicho resultado
solicitedUrl().then( ( johan ) => console.log(johan) )
//enseguida le agrego un catch parq eu me atrape el error
//si algo llega a fallaren la funcion solicitud y imprimo
//el error por consola, enseguida coloco la funcion 
// finally para cerrar la promesa y por consola 
//digo finalmente
.catch( ( err ) => console.error( err ) ).finally( () => console.log('Finalmente') );









 


