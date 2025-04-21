import { getUserBy } from "../../js-foundation/03-callbacks";

describe('js.foundation/03-callbacks.ts', () => {

    test('should be Jane Doe is he 2', (done) => {
        const id = 2;
        const usuario = 'John Doe';

        getUserBy(id, (err, user) => {

            const { id, name } = user!;

            expect(err).toBeUndefined();
            expect(id).toBe(2)
            expect(name).toBe('Jane Doe');
            done()
        });



    });


});

