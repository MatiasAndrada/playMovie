import React, { useState } from 'react';
import PushPrdt from './Product';


const Products = (evt) => {
  const [coffee, setCoffee] = useState([
    {
      "category": "coffee",
      "tipo": "Espresso doble",
      "precio": "$40",
      "img": "img/products/product_breakfast-afternoon/coffee/espresso-doble.jpg",
    },
    {
      "category": "coffee",
      "tipo": "Cafe americano",
      "precio": "$85",
      "img": "img/products/product_breakfast-afternoon/coffee/cafe-americano.jpg",
    },
    {
      "category": "coffee",
      "tipo": " cappuccino",
      "precio": "$160",
      "img": "img/products/product_breakfast-afternoon/coffee/cappuccino.jpg",
    },
    {
      "category": "coffee",
      "tipo": "Cafe Latte",
      "precio": "$65",
      "img": "img/products/product_breakfast-afternoon/coffee/cafe-latte.jpg",
    },
    {
      "category": "coffee",
      "tipo": "Latte de Vainilla",
      "precio": "$65",
      "img": "img/products/product_breakfast-afternoon/coffee/latte-vainilla.jpg",
    },
    {
      "category": "coffee",
      "tipo": "Latte de canela y especias",
      "precio": "$85",
      "img": "img/products/product_breakfast-afternoon/coffee/latte-canela.jpg",
    },
    {
      "category": "coffee",
      "tipo": "Latte de caramelo",
      "precio": "$65",
      "img": "img/products/product_breakfast-afternoon/coffee/latte-caramelo.jpg",
    }
  ])
  const [jugos, setJugos] = useState([
    {
      "category": "jugos",
      "tipo": "Naranja natural",
      "precio": "$55",
      "img": "img/products/product_breakfast-afternoon/jugos/jugo-naranja.jpg",
    },
    {
      "category": "jugos",
      "tipo": "Manzana",
      "precio": "$65",
      "img": "img/products/product_breakfast-afternoon/jugos/jugo-manzana.jpg",
    },
    {
      "category": "jugos",
      "tipo": "Fresa",
      "precio": "$65",
      "img": "img/products/product_breakfast-afternoon/jugos/jugo-frutilla.jpg",
    },
    {
      "category": "jugos",
      "tipo": "Banana",
      "precio": "$40",
      "img": "img/products/product_breakfast-afternoon/jugos/jugo-banana.jpg",
    }
  ])
  const [comidaB, setComidaB] = useState([
    {
      "category": "comidaB",
      "tipo": "Panes y huevos",
      "precio": "$170",
      "img": "img/products/product_breakfast-afternoon/comida/pan-huevos.jpg",
    },
    {
      "category": "comidaB",
      "tipo": "Bizcocho salado",
      "precio": "$15",
      "img": "img/products/product_breakfast-afternoon/comida/bizcocho-salado.jpg",
    },
    {
      "category": "comidaB",
      "tipo": "bizcocho con azucar",
      "precio": "$15",
      "img": "img/products/product_breakfast-afternoon/comida/bizcocho-azucar.jpg",
    },
    {
      "category": "comidaB",
      "tipo": "Burrito",
      "precio": "$190",
      "img": "img/products/product_breakfast-afternoon/comida/burrito.jpg",
    },
    {
      "category": "comidaB",
      "tipo": "Medialunas",
      "precio": "$30",
      "img": "img/products/product_breakfast-afternoon/comida/medialuna.jpg",
    },
  ])
  const [comidaD, setComidaD] = useState([
    {
      "category": "comidaD",
      "tipo": "Ravioles",
      "precio": "$230",
      "img": "img/products/product_dinner/comida/ravioles.jpg",

    },
    {
      "category": "comidaD",
      "tipo": "Fideos con salsa",
      "precio": "$220",
      "img": "img/products/product_dinner/comida/fideos-salsa.jpg",
    },
    {
      "category": "comidaD",
      "tipo": "Fideos con crema",
      "prasecio": "$180",
      "img": "img/products/product_dinner/comida/fideos-crema.jpg",
    },
    {
      "category": "comidaD",
      "tipo": "Milanesa con papas",
      "precio": "$155",
      "img": "img/products/product_dinner/comida/milanesa-papas.jpg",
    },
    {
      "category": "comidaD",
      "tipo": "Carne asada",
      "precio": "$240",
      "img": "img/products/product_dinner/comida/carne-asada.jpg",
    },
  ])
  const [vino, setVino] = useState([
    {
      "category": "vino",
      "tipo": "Altura maxina",
      "precio": "$120",
      "img": "img/products/product_dinner/vinos/altura-maxima.jpg",
    },
    {
      "category": "vino",
      "tipo": "Paso a paso",
      "precio": "$85",
      "img": "img/products/product_dinner/vinos/paso-a-paso.jpg",
    },
    {
      "category": "vino",
      "tipo": "viña de balbo",
      "precio": "$50",
      "img": "img/products/product_dinner/vinos/viñas-balbo.jpg",
    },
  ])
  const [beer, setBeer] = useState([
    {
      "category": "beer",
      "tipo": "Ipa",
      "precio": "$60",
      "img": "img/products/product_lunch/beer/ipa.jpg",
    },
    {
      "category": "beer",
      "tipo": "Kune",
      "precio": "$60",
      "img": "img/products/product_lunch/beer/kune.jpg",
    },
    {
      "category": "beer",
      "tipo": "Golden",
      "precio": "$60",
      "img": "img/products/product_lunch/beer/golden.jpg",
    },
    {
      "category": "beer",
      "tipo": "Amber lager",
      "precio": "$60",
      "img": "img/products/product_lunch/beer/amber-lager.jpg",
    },
    {
      "category": "beer",
      "tipo": "24.7",
      "precio": "$60",
      "img": "img/products/product_lunch/beer/24.7.jpg",
    },
    {
      "category": "beer",
      "tipo": "Weisse",
      "precio": "$60",
      "img": "img/products/product_lunch/beer/weisse.jpg",
    },
  ])
  const [pizza, setPizza] = useState([
    {
      "tipo": "4 Quesos",
      "precio": "$400",
      "img": "img/products/product_lunch/pizza/4-quesos.jpg",
    },
    {
      "tipo": "fugazzeta",
      "precio": "$360",
      "img": "img/products/product_lunch/pizza/fugazzeta.jpg",
    },
    {
      "tipo": "especial",
      "precio": "$340",
      "img": "img/products/product_lunch/pizza/especial.jpg",
    },
  ])

  PrdtList.map((product) => {
    return (
      <PushPrdt tipo={product.tipo} precio={product.precio} img={product.img} />
    )
  })

export default Products;




/*  let PrdtList;
  switch (evt) {
    case coffee:
      PrdtList = coffee;
      break;
    case jugos:
      PrdtList = jugos;
      break;
    case comidaB:
      PrdtList = comidaB;
      break;
    case pizza:
      PrdtList = pizza;
      break;
    case beer:
      PrdtList = beer;
      break;
    case comidaD:
      PrdtList = comidaD;
      break;
    case vino:
      PrdtList = vino;
      break;
  }*/