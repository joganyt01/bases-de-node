"use strict";
//con require accedo ala carpeta plugins especificamente
//al archivo getidplugin y desde ahi le digo, desestructurando
//la funcion Getuuid que me tome exactamente esa funcion 
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.httpClientPlugin = exports.getAge = exports.getUUID = void 0;
//y las propiedades que contiene getuuid
var get_id_plugin_1 = require("./get-id.plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
//igualmente accedo ala carpeta plugins,desestructuro 
//la funcion get age y tomo las propiedades
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
//igualmente accedo ala carpeta plugins,desestructuro 
//la funcion http y tomo las propiedades
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "httpClientPlugin", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
//igualmente accedo ala carpeta plugins,pero no desestructuro
//porque? porque desde el archivo logger.plugin estoy
//exportando directamente la funcion y sus propiedades
//en cambio en las otras si utilizo desestructuracion porque
//estoy llamando a un objeto y necesito de sus propiedades
