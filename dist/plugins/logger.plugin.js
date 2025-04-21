"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
//definiendo una constante que me llama a un
//require que me permite importar modulos en este caso
//winston que me permite capturar, almacenar y gestionar
//mensajes de log
const winston_1 = __importStar(require("winston"));
const { combine, timestamp, json } = winston_1.format;
//creo un objeto llamado llogger
//que me llama a un metodo llamado createlogger
//que sirve para crear un logger
exports.logger = winston_1.default.createLogger({
    //defino un nivel en este caso info porque
    //info porque aca manejo tres tipos de level
    //que son info,warn o error en est caso sera info
    level: 'info',
    //aca defino un fomato en este caso json
    //junto a winston que es la libreria que estoy 
    //importando con require y lo que hago aca
    //es volverlo o pasarlo a formato json
    format: combine(timestamp(), json()),
    //llamo un array de objetos llamado transport
    // defaultMeta: { service: 'user-service' },
    transports: [
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        //que contiene una instancia osea un obejto que se crea 
        //a partir de una clase, que llama un transporte
        //  de winston,es decir permite guardar logs en lugar
        //de solo mostrarlos en consola,aca especifico el nombre
        //del archivo en donde se guardara los logs("error.log")
        //level indica que solo se guardar en este archivo
        //los mensajes con nivel de error
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //aca contiene otra instancia y repetimos lo de
        //winston.transport en este caso el nombre del 
        // archivo es combined log y no 
        // se especifica el nivel 
        //es decir que aca se registraran todos 
        // los niveles de error, info informacion del archivo
        //war, advertencia de posbles errores del archivo
        //error, los errores del archivo
        new winston_1.default.transports.File({ filename: 'combined.log' }),
    ],
});
//ahora llamo al obejto y con el metodo add, agrego el new
//winston transport para que me muestre tambien por consola
//dentro del objeto con el metodo format.simple, lo vuelvo
//formato simple
exports.logger.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
//finalmente exporto la funcion con la palabra 
//reservada module.export enseguida creo
//funcion llamada buildlogger(regsitradordeconstruccion)
//y le asigno un parametro llamado service
const buildLogger = (service) => {
    //retorno para que me devuelva la informacion
    //dentro del return
    return {
        //le digo que log(archivo de registro) me guarda un mensaje
        //con un parametro llamado mensaje
        log: (message) => {
            //llamo al objeto logger y dentrode el
            //con log, le agrego informacion con los para
            //metros message y service
            exports.logger.log('info', { message, service });
        },
        //y le digo que error(level de logger)
        //con el paramtero message
        error: (message) => {
            //llamo al obejto logger y agrego dentro de el 
            //con error, message, service y adicional a esto
            //le agrego un nuevo dato con el metodo new date
            //to iso string, que lo que hara sera agregarme la fecha
            //año,mes y hora del error y combined log
            exports.logger.error('error', { message, service, at: new Date().toISOString() });
        },
    };
};
exports.buildLogger = buildLogger;
