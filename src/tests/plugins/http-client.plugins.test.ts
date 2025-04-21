import { throwDeprecation } from "process";
import { httpClientPlugin } from "../../plugins";

describe('plugins/http-client.plugins,ts',()=>{

test('httpClientPlugin.get() sholuld return a string',async()=>{

    const data=await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
    
    expect(data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": expect.any(Boolean)
    });

});

test('httpClientPlugin should have post, put anda delte methods',async()=>{
const data={httpClientPlugin};


expect(data).toEqual({
    httpClientPlugin: {
        get: expect.any(Function),
        post: expect.any(Function),
        put: expect.any(Function),
        delete: expect.any(Function),
      }


})

});

});