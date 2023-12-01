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

const vegetacion = [
  { id: 1, nombre: 'Rosa', imagen: 'rosas.jpg', descripcion: 'La rosa es una flor conocida por su belleza y fragancia. Se encuentra en una variedad de colores y se utiliza comúnmente como símbolo de amor y romance.' },
  { id: 2, nombre: 'Orquídea', imagen: 'orquidea.jpg', descripcion: 'La orquídea es una flor exótica con una amplia variedad de especies y colores. Son apreciadas por su elegancia y se encuentran en diversas partes del mundo.' },
  { id: 3, nombre: 'Pino', imagen: 'pino.jpg', descripcion: 'El pino es un árbol con hojas en forma de aguja y es común en bosques templados. Se utiliza para la producción de madera y tiene un papel importante en la industria forestal.' },
  { id: 4, nombre: 'Cactus', imagen: 'cactus.jpg', descripcion: 'Los cactus son plantas suculentas adaptadas a entornos áridos. Tienen hojas modificadas en espinas y son conocidos por su capacidad para almacenar agua.' },
  { id: 5, nombre: 'Bambú', imagen: 'bambu.jpg', descripcion: 'El bambú es una planta de rápido crecimiento y se utiliza en diversas culturas para la construcción y fabricación de diversos productos. Es conocido por su versatilidad.' },
  { id: 6, nombre: 'Lirio', imagen: 'lirio.jpg', descripcion: 'El lirio es una flor elegante y fragante que se encuentra en una variedad de colores. Se utiliza comúnmente en arreglos florales y tiene un significado simbólico en varias culturas.' },
  { id: 7, nombre: 'Tomate', imagen: 'tomate.jpg', descripcion: 'El tomate es una planta frutal comúnmente cultivada por sus frutos comestibles. Es una parte fundamental de muchas cocinas y se consume en una variedad de formas.' },
  { id: 8, nombre: 'Palma', imagen: 'palma.jpg', descripcion: 'Las palmas son árboles con hojas grandes y se encuentran en climas tropicales. Algunas especies de palmas se utilizan para la producción de aceite de palma y otras aplicaciones.' },
  { id: 9, nombre: 'Hiedra', imagen: 'hiedra.jpg', descripcion: 'La hiedra es una planta trepadora que se adhiere a las superficies. Es apreciada por su aspecto ornamental y se utiliza a menudo en jardines verticales.' },
  { id: 10, nombre: 'Cedro', imagen: 'cedro.jpg', descripcion: 'El cedro es un árbol de madera aromática y duradera. Se utiliza en la construcción de muebles, revestimientos y en la fabricación de aceites esenciales.' },
  { id: 11, nombre: 'Girasol', imagen: 'girasol.jpg', descripcion: 'El girasol es una planta que destaca por su gran flor amarilla. Se sigue al sol a lo largo del día en un fenómeno conocido como heliotropismo.' },
  { id: 12, nombre: 'Manzano', imagen: 'manzano.jpg', descripcion: 'El manzano es un árbol frutal conocido por producir manzanas. Existen numerosas variedades de manzanos con frutos de diferentes colores y sabores.' },
  { id: 13, nombre: 'Hierba de Limón', imagen: 'hierba_limón.jpg', descripcion: 'La hierba de limón es una planta aromática utilizada en la cocina y en infusiones. Tiene un agradable aroma a limón y propiedades medicinales.' },
  { id: 14, nombre: 'Cerezos en Flor', imagen: 'cerezos_flor.jpg', descripcion: 'Los cerezos en flor, también conocidos como sakuras, son árboles ornamentales que producen hermosas flores rosadas o blancas en primavera.' },
  { id: 15, nombre: 'Helecho', imagen: 'helecho.jpg', descripcion: 'Los helechos son plantas no florales que se reproducen a través de esporas. Se encuentran en una variedad de ambientes, desde bosques hasta jardines.' },
  { id: 16, nombre: 'Almendro', imagen: 'almendro.jpg', descripcion: 'El almendro es un árbol que produce almendras, un fruto seco comestible. Además de su uso culinario, el almendro es apreciado por su floración.' },
  { id: 17, nombre: 'Aloe Vera', imagen: 'aloe_vera.jpg', descripcion: 'El aloe vera es una planta suculenta conocida por sus propiedades medicinales. Se utiliza comúnmente para tratar quemaduras y afecciones de la piel.' },
  { id: 18, nombre: 'Begonia', imagen: 'begonia.jpg', descripcion: 'La begonia es una planta ornamental apreciada por sus coloridas flores y hojas decorativas. Se cultiva tanto en interiores como en exteriores.' },
  { id: 19, nombre: 'Ficus', imagen: 'ficus.jpg', descripcion: 'El ficus es un género de plantas que incluye variedades como el ficus benjamina. Se utilizan como plantas de interior y son conocidas por su adaptabilidad.' },
  { id: 20, nombre: 'Jazmín', imagen: 'jazmin.jpg', descripcion: 'El jazmín es una planta trepadora famosa por sus fragantes flores blancas o amarillas. Se utiliza en perfumería y aromaterapia.' },

];

const paises = [
  { 
    id: 1,
    nombre: 'Estados Unidos',
    imagen:'eua.jpg',
    capital: 'Washington D.C.',
    poblacion: '331 millones',
    idioma: 'Inglés',
    informacionAdicional: 'Estados Unidos es un país diverso con una mezcla de culturas, paisajes y ciudades emblemáticas. Es conocido por su influencia global, innovación tecnológica y su historia en la lucha por la libertad y los derechos civiles.' 
  },
  { 
    id: 2,
    nombre: 'China',
    imagen:'china.jpg',
    capital: 'Pekín',
    poblacion: '1,411 millones',
    idioma: 'Chino',
    informacionAdicional: 'China es una potencia mundial con una rica historia que se extiende por miles de años. Es conocida por su cultura milenaria, su impresionante desarrollo económico y su diversidad geográfica.' 
  },
  { 
    id: 3,
    nombre: 'India',
    imagen:'india.jpg',
    capital: 'Nueva Delhi',
    poblacion: '1,366 millones',
    idioma: 'Hindi',
    informacionAdicional: 'India es un país colorido y diverso con una rica herencia cultural. Es la cuna de varias religiones y ha hecho contribuciones significativas a la filosofía, la medicina y las artes.' 
  },
  { 
    id: 4,
    nombre: 'Brasil',
    imagen:'brasil.jpg',
    capital: 'Brasilia',
    poblacion: '213 millones',
    idioma: 'Portugués',
    informacionAdicional: 'Brasil es conocido por su vibrante cultura, playas tropicales y la Amazonía, el pulmón verde del mundo. Es famoso por su carnaval y su pasión por el fútbol.' 
  },
  { 
    id: 5,
    nombre: 'Rusia',
    imagen:'rusia.jpg',
    capital: 'Moscú',
    poblacion: '146 millones',
    idioma: 'Ruso',
    informacionAdicional: 'Rusia es el país más extenso del mundo, con una rica historia que abarca desde los zares hasta la era soviética. Tiene una diversidad geográfica impresionante, desde tundras hasta montañas.' 
  },
  { 
    id: 6,
    nombre: 'Japón',
    imagen:'japon.jpg',
    capital: 'Tokio',
    poblacion: '126 millones',
    idioma: 'Japonés',
    informacionAdicional: 'Japón es conocido por su mezcla única de tradición y modernidad. Es hogar de la tecnología de vanguardia, la arquitectura tradicional, el sushi y una rica cultura artística.' 
  },
  { 
    id: 7,
    nombre: 'México',
    imagen:'mexico.jpg',
    capital: 'Ciudad de México',
    poblacion: '126 millones',
    idioma: 'Español',
    informacionAdicional: 'México es un país lleno de color, sabor y tradición. Tiene una historia fascinante que se remonta a civilizaciones antiguas como los aztecas y los mayas. La cocina mexicana es reconocida a nivel mundial.' 
  },
  { 
    id: 8,
    nombre: 'Alemania',
    imagen:'alemania.jpg',
    capital: 'Berlín',
    poblacion: '83 millones',
    idioma: 'Alemán',
    informacionAdicional: 'Alemania es conocida por su ingeniería de precisión, su rica historia cultural y sus paisajes encantadores. Ha sido un centro de influencia europea y ha experimentado una notable reunificación después de la Guerra Fría.' 
  },
  { 
    id: 9,
    nombre: 'Egipto',
    imagen:'egipto.jpg',
    capital: 'El Cairo',
    poblacion: '104 millones',
    idioma: 'Árabe',
    informacionAdicional: 'Egipto es hogar de las antiguas pirámides y tiene una rica herencia histórica que se remonta a la civilización del Antiguo Egipto. El río Nilo y el desierto del Sahara son características distintivas de su geografía.' 
  },
  { 
    id: 10,
    nombre: 'Australia',
    imagen:'australia.jpg',
    capital: 'Canberra',
    poblacion: '25 millones',
    idioma: 'Inglés',
    informacionAdicional: 'Australia es conocida por su vida silvestre única, sus vastos paisajes desérticos y su estilo de vida al aire libre. La Gran Barrera de Coral y el Outback son puntos destacados de su geografía.' 
  },
  {
  id: 11,
    nombre: 'Francia',
    imagen:'francia.jpg',
    capital: 'París',
    poblacion: '67 millones',
    idioma: 'Francés',
    informacionAdicional: 'Francia es conocida por su sofisticada cultura, su gastronomía de clase mundial y sus icónicos monumentos como la Torre Eiffel y el Louvre.' 
  },
  { 
    id: 12,
    nombre: 'Canadá',
    imagen:'canada.jpg',
    capital: 'Ottawa',
    poblacion: '38 millones',
    idioma: 'Inglés, Francés',
    informacionAdicional: 'Canadá es un país diverso con impresionantes paisajes naturales que incluyen montañas, lagos y bosques. Es reconocido por su calidad de vida y su enfoque multicultural.' 
  },
  { 
    id: 13,
    nombre: 'Sudáfrica',
    imagen:'sudafrica.jpg',
    capital: 'Pretoria',
    poblacion: '60 millones',
    idioma: 'Afrikáans, Inglés',
    informacionAdicional: 'Sudáfrica es conocida por su diversidad étnica, su historia de lucha contra el apartheid y sus impresionantes reservas de vida silvestre que incluyen el Parque Nacional Kruger.' 
  },
  { 
    id: 14,
    nombre: 'Argentina',
    imagen:'argentina.jpg',
    capital: 'Buenos Aires',
    poblacion: '45 millones',
    idioma: 'Español',
    informacionAdicional: 'Argentina es famosa por su pasión por el fútbol, su tango emocional y sus vastas llanuras conocidas como las Pampas. También es hogar de la Patagonia y los Andes.' 
  },
  { 
    id: 15,
    nombre: 'Corea del Sur',
    imagen:'coreasur.jpg',
    capital: 'Seúl',
    poblacion: '51 millones',
    idioma: 'Coreano',
    informacionAdicional: 'Corea del Sur es conocida por su tecnología avanzada, su cultura pop globalmente influyente y su rica tradición cultural, que incluye la ceremonia del té y la caligrafía.' 
  },
  { 
    id: 16,
    nombre: 'Nigeria',
    imagen:'nigeria.jpg',
    capital: 'Abuja',
    poblacion: '206 millones',
    idioma: 'Inglés',
    informacionAdicional: 'Nigeria es el país más poblado de África y es conocido por su diversidad étnica, su rica herencia cultural y sus recursos naturales como el petróleo.' 
  },
  { 
    id: 17,
    nombre: 'Italia',
    imagen:'italia.jpg',
    capital: 'Roma',
    poblacion: '60 millones',
    idioma: 'Italiano',
    informacionAdicional: 'Italia es famosa por su historia antigua, su arte renacentista, su deliciosa comida y sus icónicos destinos turísticos como el Coliseo y la Torre inclinada de Pisa.' 
  },
  { 
    id: 18,
    nombre: 'Turquía',
    imagen:'turquia.jpg',
    capital: 'Ankara',
    poblacion: '83 millones',
    idioma: 'Turco',
    informacionAdicional: 'Turquía es un país que abarca dos continentes y tiene una rica historia que incluye la antigua ciudad de Troya y la influencia otomana. Su cultura es una fusión única de oriente y occidente.' 
  },
  { 
    id: 19,
    nombre: 'Marruecos',
    imagen:'marruecos.jpg',
    capital: 'Rabat',
    poblacion: '37 millones',
    idioma: 'Árabe',
    informacionAdicional: 'Marruecos es conocido por sus zocos vibrantes, su arquitectura islámica única y sus paisajes que van desde el desierto del Sahara hasta las montañas del Atlas.' 
  },
  { 
    id: 20,
    nombre: 'Noruega',
    imagen:'noruega.jpg',
    capital: 'Oslo',
    poblacion: '5 millones',
    idioma: 'Noruego',
    informacionAdicional: 'Noruega es famosa por sus impresionantes fiordos, su calidad de vida elevada y su conexión con la naturaleza. Es también conocida por la aurora boreal en las noches polares.' 
  },
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

 // Rutas para la información de vegetación
app.get('/vegetacion', (req, res) => {
  res.json(vegetacion.map(planta => ({
    id: planta.id,
    nombre: planta.nombre,
    imagen: `/imagenes/${planta.imagen}`, // Ruta completa de la imagen
    descripcion: planta.descripcion,
  })));
});

// Rutas para la información de países
app.get('/paises', (req, res) => {
  res.json(paises.map(pais => ({
    id: pais.id,
    nombre: pais.nombre,
    imagen: `/imagenes/${pais.imagen}`, // Ruta completa de la imagen
    capital: pais.capital,
    poblacion: pais.poblacion,
    idioma: pais.idioma,
    informacionAdicional: pais.informacionAdicional,
  })));
});


});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
