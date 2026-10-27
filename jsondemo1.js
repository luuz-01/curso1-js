//Se requiere tenga las claves: 
//2 cadena
//2 nuérico (entero,decimal)
//1 null
// 1 lógica (false / true)
// 1 array (cadenas)
// 1 array (objetos)
//1 objeto (arrays)

//10 MINUTOS


//Construir un objeto con los datos una película

const pelicula = {
  titulo : "Los Juegos del Hambre",
  anio: 2012,
  idiomas: ["Ingles","Español","Frances"],
  duracionMin:142,
  generos:["ciencia ficción", "acción", "drama", "distopía"],
  presupuesto:78000000,
  recaudacion:694500000,
  elenco:[
    {
      nombres:"Jennifer Lawrence", personaje:"	Katniss Everdeen", rol:"Protagonista Femenina"},
    {
      nombres:"Josh Hutcherson", personaje:"	Peeta Mellark", rol:"Protagonista Masculino"
    },
    {
      nombres:"Liam Hemsworth", personaje:"	Gale Hawthorne", rol:"Personaje Secundario"
    },
    {
      nombres:"Donald Sutherland", personaje:"	Presidente Coriolanus Snow", rol:"Antagonista"
    },
    {
      nombres:"Woody Harrelson", personaje:"	Haymitch Abernathy", rol:"Mentor"
    },
    {
      nombres:"Willow Shields", personaje:"Primrose Everdeen", rol:"Hermana menor de la protagonista"
    }


  ],
  sinopsis:["2 trubutos de 12 distritos se enfrentan a muerte, mistras en el transcurso se revelan al capitolio"] ,
  direccion: ["Gary Ross"],
  escritores:["Billy Ray","Gary Ross","Suzanne Collins"],
  UC:{
    peliculas: ["Los juegos del Hambre (2012)",
      "Los juegos del hambre: en llamas (2013)",
      "Los juegos del hambre: sinsajo parte1 (2014)",
      "Los juegos del hambre: sinsajo parte2 (2015)",
      "Los juegos del hambre: balada de pájaros cantores y serpientes (2023)",
      "Los juegos del hambre: amanecer en la cosecha (2026)"],
    libros: ["Los juegos del hambre",
              "En llamas",
              "Balada de pájaros cantores y serpientes",
              "Amanecer en la cosecha"]
  }
}

//Cuál es el ultimo elemento de idiomas
console.log(pelicula.idiomas[pelicula.idiomas.length -1])

//¿Cual es el personaje del primer actor?
console.log(pelicula.elenco[0].personaje) 

//¿Cual es el rol del ultimo actor
console.log(pelicula.elenco[pelicula.elenco.length -1].rol)

//Mostrar todas los libros del UC
const libros = pelicula.UC.libros
  libros.forEach(libros => {
  console.log(libros)
    
  });