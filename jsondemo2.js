//PASO 1: URL (endpoint)
const API_URL = 'https://dragonball-api.com/api/characters/35'

//PASO 2: Función asíncrona (tiempos distintos/diferidos) - Latencia
async function obtenerPersonaje(){}
  //PASO 3: App es propensa a errores...
  try{
    //PASO 4: Realizar la petición
    const respuesta = await fetch (API_URL)

  }catch(e){
    console.error(`No se pudo concretar la operación`)
  }