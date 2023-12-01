const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const animales = [
{ 
    id: 1, nombre: 'León',
    imagen: 'leon.jpeg', 
    sonido: 'leon.mp3',
    descripcion: 'El león, conocido como el rey de la selva, es un felino majestuoso que vive en manadas. Su melena distintiva es un símbolo de fortaleza y liderazgo en el reino animal. Los leones cazan en grupo y son conocidos por su ferocidad y elegancia en la caza.' 
},
{
    id: 2, nombre: 'Elefante',
    imagen: 'elefante.jpg', 
    sonido: 'elefante.mp3',
    descripcion: 'El elefante, uno de los animales más grandes y fuertes de la Tierra, es conocido por su inteligencia y memoria excepcionales. Vive en manadas sociales y forma fuertes lazos familiares. Los elefantes son herbívoros y desempeñan un papel crucial en el mantenimiento de los ecosistemas.' 
},
{ id: 3, nombre: 'Jirafa',
 imagen: 'jirafa.jpg', 
 sonido: 'jirafa.mp3',
  descripcion: 'La jirafa es un animal único con su largo cuello que le permite alcanzar las hojas más altas de los árboles. Es el animal más alto de la Tierra y tiene una elegancia distintiva en su andar. Las jirafas son herbívoras y viven en grupos, siendo animales sociales.' 
},
{ id: 4, nombre: 'Tigre',
 imagen: 'tigre.jpg', 
 sonido: 'tigre.mp3',
  descripcion: 'El tigre es un depredador feroz con hermosas rayas en su pelaje. Es el felino más grande y está en peligro de extinción. Su presencia evoca respeto y admiración en la naturaleza. Los tigres son solitarios y cazan acechando sigilosamente a sus presas.' 
},
{ id: 5, nombre: 'Oso Polar',
 imagen: 'oso_polar.jpg', 
 sonido: 'oso_polar.mp3',
  descripcion: 'El oso polar está adaptado al frío extremo y vive en las regiones árticas. Es un nadador experto y depende del hielo marino para cazar focas. Su pelaje blanco lo camufla en su entorno nevado. Los osos polares están amenazados por la pérdida de hielo marino debido al cambio climático.' 
},
{ id: 6, nombre: 'Pingüino Emperador',
 imagen: 'pinguino_emperador.jpg', 
 sonido: 'emeperador.mp3',
  descripcion: 'El pingüino emperador es una especie de ave no voladora que habita en la Antártida. Forman colonias y son conocidos por su comportamiento social y su capacidad para resistir condiciones extremas. Los pingüinos emperadores son excelentes nadadores y cazadores bajo el agua.' 
},
{ id: 7, nombre: 'Koala',
 imagen: 'koala.jpg', 
 sonido: 'koala.mp3',
  descripcion: 'El koala es un marsupial arbóreo australiano conocido por su pelaje suave y su dieta exclusiva de hojas de eucalipto. Son animales adorables y vulnerables a la pérdida de su hábitat. A pesar de su apariencia tranquila, los koalas son ágiles trepadores y pasan la mayor parte del tiempo descansando en los árboles.' 
},
{ id: 8, nombre: 'Cebra',
 imagen: 'cebra.jpg', 
 sonido: 'cebra.mp3',
  descripcion: 'La cebra es un herbívoro africano conocido por sus rayas únicas. Vive en las llanuras africanas y las rayas funcionan como un mecanismo de camuflaje contra los depredadores. Las cebras son animales sociales que viven en manadas para protegerse mutuamente.' 
},
{ id: 9, nombre: 'Gorila',
 imagen: 'gorila.jpg', 
 sonido: 'gorila.mp3',
  descripcion: 'El gorila, primo cercano de los humanos, vive en las selvas africanas. Son animales fuertes y sociales que viven en grupos familiares. Los gorilas son herbívoros y su comportamiento incluye gestos y vocalizaciones para la comunicación dentro del grupo.' 
},
{ id: 10, nombre: 'Delfín', 
  imagen: 'delfin.jpg', 
  sonido: 'delfin.mp3',
  descripcion: 'El delfín es un inteligente mamífero marino conocido por su juguetona naturaleza. Forman grupos sociales llamados manadas y son conocidos por sus acrobacias en el agua. Los delfines utilizan la ecolocalización para comunicarse y buscar alimentos.' 
},
{ id: 11, nombre: 'Leopardo', 
    imagen: 'leopardo.jpg', 
    sonido: 'leopardo.mp3',
      descripcion: 'El leopardo es un elegante felino con manchas distintivas. Es conocido por su agilidad y habilidades de acecho, siendo un depredador eficiente. Los leopardos son solitarios y territoriales, cazando presas con precisión en diferentes hábitats, desde selvas hasta sabanas.' 
    },
    { id: 12, nombre: 'Hipopótamo',
     imagen: 'hipopotamo.jpg', 
     sonido: 'hipopotamo.mp3',
      descripcion: 'El hipopótamo es un mamífero semiacuático conocido por su gran tamaño y su piel gruesa. Aunque pasan mucho tiempo en el agua, los hipopótamos son ágiles en tierra firme. Son herbívoros y, a pesar de su apariencia tranquila, son considerados uno de los animales más peligrosos de África.' 
    },
    { id: 13, nombre: 'Suricata', 
      imagen: 'suricata.jpg', 
      sonido: 'suricata.mp3',
      descripcion: 'El suricata es un pequeño mamífero que vive en grupos sociales. Son conocidos por su comportamiento vigilante, con algunos individuos asignados como centinelas para detectar depredadores. Los suricatas son nativos del desierto y son expertos cazadores de insectos.' 
    },
    { id: 14, nombre: 'Puma', 
    imagen: 'puma.jpg', 
    sonido: 'puma.mp3',
      descripcion: 'El puma, también conocido como león de montaña, es un felino ágil y poderoso que habita en diversas regiones, desde bosques hasta desiertos. Los pumas son solitarios y cazan emboscando a sus presas. Aunque son grandes depredadores, evitan el contacto con humanos siempre que sea posible.' 
    },
    { id: 15, nombre: 'Tucán', 
      imagen: 'tucan.jpg', 
      sonido: 'tucan.mp3',
      descripcion: 'El tucán es un ave tropical con un pico colorido y llamativo. Su pico largo y ligero es una adaptación única. Los tucanes se alimentan principalmente de frutas y tienen una llamada distintiva. Son habitantes de los bosques tropicales y desempeñan un papel importante en la dispersión de semillas.' 
    },
    { id: 16, nombre: 'Rinoceronte', 
      imagen: 'rinoceronte.jpg', 
      sonido: 'rinoceronte.mp3',
      descripcion: 'El rinoceronte es un mamífero herbívoro con un cuerno distintivo en el hocico. Existen varias especies de rinocerontes, y todos enfrentan amenazas de caza furtiva debido a la demanda de sus cuernos. Son animales solitarios y tienen una piel gruesa y arrugada.' 
    },
    { id: 17, nombre: 'Murciélago',
      imagen: 'murcielago.jpg', 
      sonido: 'murcielago.mp3',
      descripcion: 'El murciélago es un mamífero volador nocturno con alas membranosas. Cumplen roles cruciales en los ecosistemas, desde la polinización de plantas hasta el control de insectos. A pesar de las asociaciones comunes con el miedo, la mayoría de los murciélagos son inofensivos para los humanos.' 
    },
    { id: 18, nombre: 'Camaleón', 
      imagen: 'camaleon.jpg', 
      sonido: 'camaleon.mp3',
      descripcion: 'El camaleón es un reptil capaz de cambiar de color para camuflarse. Esta capacidad única se utiliza para comunicarse, regular la temperatura y ocultarse de depredadores. Los camaleones tienen ojos independientes que les permiten ver en diferentes direcciones al mismo tiempo.' 
    },
    { id: 19, nombre: 'Pinguino Adelia', 
      imagen: 'pinguino_adelia.jpg', 
      sonido: 'adelea.mp3',
      descripcion: 'El pingüino Adelia es una especie de pingüino que habita en la región antártica. Son excelentes nadadores y pasan la mayor parte de su vida en el agua. Forman colonias en tierra firme durante la temporada de reproducción y son conocidos por su habilidad para deslizarse sobre el hielo.' 
    },
    { id: 20, nombre: 'Mono Tití', 
      imagen: 'mono_titi.jpg', 
      sonido: 'mono.mp3',
      descripcion: 'El mono tití es un primate pequeño y juguetón originario de América del Sur. Viven en grupos sociales y son conocidos por sus interacciones sociales complejas. Aunque son pequeños, los monos tití tienen una agilidad impresionante y son adaptables a diversos hábitats, desde bosques hasta áreas urbanas.' 
    }
  
];

// Servir archivos estáticos desde la carpeta 'imagenes'
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));
app.use('/sonidos', express.static(path.join(__dirname, 'sonidos')));
app.get('/', (req, res) => {
  res.json(animales.map(animal => ({
    id: animal.id,
    nombre: animal.nombre,
    imagen: `/imagenes/${animal.imagen}`, // Ruta completa de la imagen
    sonido: `/sonidos/${animal.sonido}`, // Ruta completa del sonido
    descripcion: animal.descripcion,
  })));
 

});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
