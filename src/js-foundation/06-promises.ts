//defino una constante para importar  y que me desestructure las propiedades
//del modulo http junto con require que me marca la ruta del plugin
import { httpClientPlugin as http } from "../plugins/http-client.plugin";
//creo una funcion flecha llmada getpo-kemonid asincronica que me devolvera 
//una promesa y le paso un parametro llamdo id
//se usa await para esperar a que una promesa se resuelva
//sinbloquear el codigo 
export const getPokemonById = async( id:string|number ):Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const pokemon = await http.get( url );
    return pokemon.name;
  } catch (error) {
    throw`pokemon not found with id ${id}`
  }
  
  
  //creo una constante llamada url para almcenar la url de la api
  //que contiene los personajes de de pokemon uso `` y 
  // template lieterals para introducir
  //en este caso un parametro que es el id de mi pokemon que es donde dicho
  //se almacenara
 
  //con await(espera hasta que la promesa de la solicitud http se resuelva)
  //  http.get(http es el modulo que
  // importe y el contiene el gestor de paquetes axios que es 
  // un plugin que me hara consultas a mi api) 
  // introduzco la url de mi api y consultare los datos
  //de mi api en este caso personajes y los obtendre

  // const resp = await fetch( url );
  // const pokemon = await resp.json();


  // throw new Error('Pokemon no existe');
  //retorno osea develvo lo almacenado en pokemon
  //y el .name es para obetener la propiedad
  //por ejemplo si el pokemos es pikachu,pokemon.name devolvera pikachu

  
  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );

}




