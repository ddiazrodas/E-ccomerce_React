const products = [
  {
    id: 0,
    title: "Game Zero",
    description:
      "Con la tecnología EAR (Ergonomic Acoustic Refinement), GAME ZERO ofrece la máxima precisión y claridad de audio. El diseño acústico cerrado proporcionado por las rejillas de los auriculares de acero pintado a medida le permite escuchar hasta el más mínimo detalle de su juego.",
    price: 43000,
    category: "auriculares",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_654010-MLA31127875096_062019-O.webp",
    specs: "Auriculares: • Diseño: Circum-aural • Transductor: Dynamic, closed • Conectores: 2 x 3.5 mm • Largo del cable: 3 m • Respuesta en frecuencia: 15–28,000 Hz • SPL: 108 Db Micrófono:• Respuesta en frecuencia: 50–16,000 Hz • Patrón de micrófono: Noise cancelling • Sensibilidad: -38 dBV/PA",
  },
  {
    id: 1,
    title: "GSP 300",
    description:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Sennheiser GSP 300 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    price: 26000,
    category: "auriculares",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_672852-MLA41244303335_032020-O.webp",
  },
  {
    id: 2,
    title: "Game One",
    description:
      "Nuestros legendarios auriculares para juegos, GAME ONE, se encuentran entre los auriculares favoritos para jugadores de todo el mundo. La tecnología original de los altavoces y un micrófono superlativo con cancelación de ruido ofrecen un rendimiento de alta fidelidad excepcional.",
    price: 46000,
    category: "auriculares",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_2X_817334-MLA31094927239_062019-F.webp",
  },
  {
    id: 3,
    title: "GSP 370",
    description:
      "Los auriculares inalámbricos para juegos GSP 370 ofrecen audio confiable y sin demoras con hasta 100 horas de juego con una sola carga. Personalice el audio de su juego a través de EPOS Gaming Suite con procesamiento de sonido envolvente digital 7.1. El auricular cuenta con un micrófono con un brazo articulado flexible que se puede levantar para silenciar y una gran comodidad de uso",
    price: 66000,
    category: "auriculares",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_2X_837834-MLA45400087977_032021-F.webp",
  },
];

// export const getData = new Promise((resolve, reject) => {
//   let condition = true;
//   setTimeout(() => {
//     if (condition) {
//       resolve(products);
//     } else {
//       reject("No pude hacerlo con fetch");
//     }
//   }, 4000);
// });

// export const getData = (categoryId) => {
//   return new Promise((resolve, reject) => {

//     let condition = true;
//     setTimeout(() => {
//       if (condition) {
//         resolve(products)
//       }
//       else {
//         reject("No pudo")
//       }
//     }, 4000);
//   })
// }

export const getData = (categoryId) => {
  return new Promise((resolve, reject) => {

    const productsFiltrados = products.filter(prod => prod.category === categoryId)


    setTimeout(() => {
      (categoryId) ? resolve (productsFiltrados) : resolve(products);
    }, 2000);
  });
}

export const getProduct = (id) => {
  return new Promise ((resolve, reject) => {

    console.log(id);

    const productsEncontrado = products.find(prod => prod.id === +id)

    console.log(productsEncontrado);

    setTimeout(() => {
      resolve(productsEncontrado);
    }, 2000);
  });
}