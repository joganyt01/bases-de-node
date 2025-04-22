
//importo una cadena de caracteres de esta ruta
import { characters, cosas } from "../../js-foundation/02-destructuring";
//con describe agrupo bloques de codigos que son pruebas
//y los ordeno para mantenerlas estructuradas,indico que compenente
//y metodo se estan probando
describe('js-foundation/02-destructuring.ts', () => {
  //metodo para crear subpruebas que sean unitarias es decir
  //que especifiquen en este caso un bloque de codigo en especial
  test('characteres should contain Flash, Superman', () => {
    //le digo que si caracteres contiene flas
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
    expect(characters[0]).toContain('Flash');


  });

  test('first character should be flash y superman', () => {
    //

    expect(characters[0]).toBe("Flash");
    expect(characters[1]).toBe("Superman");
    // expect(characters[2]).toBe('Green Lantern');



  });

});

