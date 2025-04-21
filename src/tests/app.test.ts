
describe('Test in the App File', () => {

   test('should be 50', () => {
     //arrange ordenar
      const num1 = 20;
      const num2 = 30;

      //2.act aplicar
      const sum = num1 + num2;

      //3.Assert acertar
      expect(sum).toBe(50);
   });


});