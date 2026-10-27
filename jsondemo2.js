//PASO 1: URL (endpoint)
const API_URL = 'https://dragonball-api.com/api/characters/68'

//PASO 2: Función asíncrona (tiempos distintos/diferidos) - Latencia
async function obtenerPersonaje(){}
  //PASO 3: App es propensa a errores...
  try{
    //PASO 4: Realizar la petición
    const respuesta = await fetch (API_URL)

    //PASO 5: ¿Existe una respuesta?
    if(!respuesta.ok){
      throw new Error (`No hay comunicación con el servidor`)//Stop!
    }
    
    //PASO 6: Si llegamos hasta aquí entonces hemos recibido los datos (JSON)
    //JSON (cadena)  > OBJECT JS
    const datos = await respuesta.json()

    //PASO 7 
    console.log (datos)
  }catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }