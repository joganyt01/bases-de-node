import { buildMakePerson } from "../../js-foundation/05-factory";

describe('js-foundation/05factory.ts',()=>{
    const getUUID=()=>'1234';
    const getAge=()=>23;

    test('buildmakeperson should return a function',()=>{
          
        const makeperson=buildMakePerson({getUUID,getAge});
        
       expect(typeof makeperson).toBe('function');
    });

    test('makeperson should return a person',()=>{
          
        const makeperson=buildMakePerson({getUUID,getAge});
        const johndoe=makeperson({name:'john doe',birthdate:'2001-10-01'}); 
           
        expect(johndoe).toEqual({
            id:'1234',
            name:'john doe',
            birthdate:'2001-10-01',
            age:23
        });
    });


});