//con require accedo ala carpeta plugins especificamente
//al archivo getidplugin y desde ahi le digo, desestructurando
//la funcion Getuuid que me tome exactamente esa funcion 



//y las propiedades que contiene getuuid
export{ getUUID } from "./get-id.plugin";
//igualmente accedo ala carpeta plugins,desestructuro 
//la funcion get age y tomo las propiedades
export{ getAge } from "./get-age.plugin";
//igualmente accedo ala carpeta plugins,desestructuro 
//la funcion http y tomo las propiedades
export{ httpClientPlugin } from "./http-client.plugin";
export{ buildLogger } from "./logger.plugin";
//igualmente accedo ala carpeta plugins,pero no desestructuro
//porque? porque desde el archivo logger.plugin estoy
//exportando directamente la funcion y sus propiedades
//en cambio en las otras si utilizo desestructuracion porque
//estoy llamando a un objeto y necesito de sus propiedades
