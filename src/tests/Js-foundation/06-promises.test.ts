

import { getPokemonById } from "../../js-foundation/06-promises";

describe('js-foundation/06-promises.ts',()=>{

    test('should be pokemon id',async()=>{
     const id=1;
     const name=await getPokemonById(id);
       
     expect(name).toBe('bulbasaur');
    });
    test('should return an error if pokemon does not exist',async()=>{
        const id=100000000;
        try {
            
            await getPokemonById(id);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`pokemon not found with id ${id}`)
        }
        
    


    });

});