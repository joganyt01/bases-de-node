import { prototype } from "events";
import { getAge } from "../../plugins";



describe('plugins/get-age.plugins.ts', () => {
  

    test('getAge() should be can getAge', () => {

        const birthdate = '2001-10-01';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');


    });

    test('get age should return cuurent age', () => {
        const birthdate = '2001-10-01';
        const age = getAge(birthdate);
        const calculateage = new Date().getFullYear() - new Date(birthdate).getFullYear();
   
        expect(age).toBe(calculateage);

    });

    test('get age should return 0 years',()=>{
        const spy=jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(2001);
        const birthdate = '2001-10-01';
        const age = getAge(birthdate);
    
        expect(age).toBe(0);
       
     // (getAge(birthdate).get as jest.MockedFunction<typeof >)


    });



});