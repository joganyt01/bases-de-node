



// console.log( process.env );

//declaro 3 variables donde extraigo 3 variables de entorno y las almaceno
//en constantes individuales desde process.env
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
//procces.env es un objeto global en node que contiene
//todas las varibles de entorno del sistema

// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });


 export const characters = ['Flash','Superman', 'Green Lantern', 'Batman'];

const [ , , ,batman ] = characters;


export const cosas = [
    {
      nombre: "Lapicero",
      tipo: "Útil escolar",
      precio: 1.5
    },
    {
      nombre: "Botella",
      tipo: "Recipiente",
      precio: 3.0
    },
    {
      nombre: "Audífonos",
      tipo: "Electrónico",
      precio: 25.99
    }
  ];
  

//console.log(process.env);

