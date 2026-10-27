//Función asincrona 
//Hacer una consulta el API y obter un lista de los planetasa
//Mostrar únicamente los planetas que no hayan sido destruidos (is Destroyed)
//los datos a mostrar som : name(id) Ejemplo: Mommar(6)

async function obtenerPlanetas(){
    const API_URL = `https://dragonball-api.com/api/characters/${2}`
    try{
    const respuesta = await fetch (API_URL)

    if(!respuesta.ok){
      throw new Error (`No hay comunicación con el servidor`)//Stop!
    }
    
    const datos = await respuesta.json()
    const panetas = datos.items

    obtenerPlanetas.forEach (planeta => {
      if (!planeta.isDestroyed){
        //console.log (`Planeta: ${planeta.name} - destruido: ${planeta.isDestroyed}`)
        console.log(planeta.name)
      }
    })

  }catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }
}