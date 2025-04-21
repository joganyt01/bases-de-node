
import { level } from "winston";
import { buildLogger,logger,logger as winstonLogger } from "../../plugins/logger.plugin";
import winston from "winston/lib/winston/config";
import { info } from "console";

describe('plugins/logger.plugins.test.ts',()=>{
test('buildlogger() should arhive registrer',()=>{
     const logger=buildLogger('test');

     expect(typeof logger.log).toBe('function');
     expect(typeof logger.error).toBe('function');
     

});

test('logger.log should message',()=>{
const spy=jest.spyOn(winstonLogger,'log');
 const message='test message';
 const service='test serivice';

 const logger=buildLogger(service);

 logger.log(message);
 expect(spy).toHaveBeenCalledWith(
     'info',
     expect.objectContaining({
        level:'info',
        message,
        service
     }),
 )
});

});