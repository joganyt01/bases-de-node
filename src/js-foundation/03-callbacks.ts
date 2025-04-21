interface use{
  id:number;
  name:string;
}

//defino un array llamado users
//que contiene dos objetos cada objeto 
//tiene un usuario con dos propiedades
const use:use[] = [
//creo un objeto que me contiene datos de un usuario
  {
    //creo un unico identificador con el numero
    //1 que ser el numero del primer usuario
    id: 1,
    //creo un nombre llamado john doe que sera el nombre
    //de mi primer usuario 
    name: 'John Doe',
  },
  {
    //creo otro identificador con el numero 2
    id: 2,
    //creo otro nombre a mi usuario 2
    name: 'Jane Doe',
  }
];

//creo una funcion con dos parametros que sera el id
//y el callback es decir hacer una funcion que pase como argumento
//a otra funcion
export const getUserBy=( id:number, callback:(err?:string, user?:use)=>void )=>{
  //creo una constante llamada user y le digo
  //que con el metodo .find me busque dentro del array users
  //y defino una funcion anonima que se ejecuta en cada elemento del array
  const user = use.find( function(user){
    //retorno si id es igual al argumento que paso en la funcion
    return user.id === id;  
  });
//si user no tiene un valor valido
  if( !user ) {
    setTimeout(()=>{
      callback(`User not found with id ${id}`);
    },1500);
    //rertorno una funcion callack diciendole
    //el usuario no ha sido encontrado junto al id exacto
    return 
  }
   //si no es asi retorno una funcion de callback
   //con dos argumentos null indica que no hay error
   //user contiene el objeto del usuario enocontrado
  return callback( undefined, user );
}

//llamo ala funcion module.export 
