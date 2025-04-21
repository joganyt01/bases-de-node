import { getUUID } from "../../plugins";

describe('plugins/get-id.plugins.ts',()=>{

 test('should getid return string',()=>{
   const uuid=getUUID();

   console.log(uuid);
   expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
 });

});

