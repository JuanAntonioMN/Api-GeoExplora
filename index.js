const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const animales = [
    { id: 1, nombre: 'León', imagen: 'leon.jpg', descripcion: 'El rey de la selva.' },
    { id: 2, nombre: 'Elefante', imagen: 'elefante.jpg', descripcion: 'Animal majestuoso y fuerte.' },
    { id: 3, nombre: 'Jirafa', imagen: 'jirafa.jpg', descripcion: 'Con su largo cuello, alcanza las hojas más altas de los árboles.' },
    { id: 4, nombre: 'Tigre', imagen: 'tigre.jpg', descripcion: 'Un depredador feroz con hermosas rayas.' },
    { id: 5, nombre: 'Oso Polar', imagen: 'oso_polar.jpg', descripcion: 'Adaptado al frío, vive en regiones árticas.' },
    { id: 6, nombre: 'Pingüino Emperador', imagen: 'pinguino_emperador.jpg', descripcion: 'Ave no voladora que habita en la Antártida.' },
    { id: 7, nombre: 'Koala', imagen: 'koala.jpg', descripcion: 'Marsupial arbóreo australiano conocido por su pelaje suave.' },
    { id: 8, nombre: 'Cebra', imagen: 'cebra.jpg', descripcion: 'Con sus rayas únicas, vive en las llanuras africanas.' },
    { id: 9, nombre: 'Gorila', imagen: 'gorila.jpg', descripcion: 'Primo cercano de los humanos, vive en selvas africanas.' },
    { id: 10, nombre: 'Delfín', imagen: 'delfin.jpg', descripcion: 'Inteligente mamífero marino conocido por su juguetona naturaleza.' },
    { id: 11, nombre: 'Leopardo', imagen: 'leopardo.jpg', descripcion: 'Elegante felino con manchas distintivas.' },
    { id: 12, nombre: 'Hipopótamo', imagen: 'hipopotamo.jpg', descripcion: 'Mamífero semiacuático conocido por su gran tamaño.' },
    { id: 13, nombre: 'Suricata', imagen: 'suricata.jpg', descripcion: 'Pequeño mamífero que vive en grupos sociales.' },
    { id: 14, nombre: 'Puma', imagen: 'puma.jpg', descripcion: 'Felino ágil y poderoso que habita en diversas regiones.' },
    { id: 15, nombre: 'Tucán', imagen: 'tucan.jpg', descripcion: 'Ave tropical con un pico colorido y llamativo.' },
    { id: 16, nombre: 'Rinoceronte', imagen: 'rinoceronte.jpg', descripcion: 'Mamífero herbívoro con cuerno distintivo en el hocico.' },
    { id: 17, nombre: 'Murciélago', imagen: 'murcielago.jpg', descripcion: 'Mamífero volador nocturno con alas membranosas.' },
    { id: 18, nombre: 'Camaleón', imagen: 'camaleon.jpg', descripcion: 'Reptil capaz de cambiar de color para camuflarse.' },
    { id: 19, nombre: 'Pinguino Adelia', imagen: 'pinguino_adelia.jpg', descripcion: 'Especie de pingüino que habita en la región antártica.' },
    { id: 20, nombre: 'Mono Tití', imagen: 'mono_titi.jpg', descripcion: 'Primate pequeño y juguetón originario de América del Sur.' },

    
  
];

app.get('/animales', (req, res) => {
  res.json(animales.map(animal => ({
    id: animal.id,
    nombre: animal.nombre,
    imagen: animal.imagen,
    descripcion: animal.descripcion,
  })));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
