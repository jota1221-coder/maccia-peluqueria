export const WHATSAPP_NUMBER = "5491140307491";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quiero reservar un turno en Maccia Peluquería")}`;

export const SERVICIOS = [
  {
    nombre: "Corte",
    desc: "Corte clásico o de tendencia, adaptado a tu estilo.",
    descLarga: "Clásico o de tendencia, a tijera o a máquina, siempre pensado para tu tipo de cabello y la forma de tu cara — no al revés. Antes de cortar, charla corta: qué tenés, qué buscás y cómo lo vas a mantener en casa. De ahí sale el resultado, no de una foto de Instagram.",
    img: "/fotos/corte-fade.png",
    pos: "center 65%",
  },
  {
    nombre: "Barba",
    desc: "Perfilado y arreglo de barba con navaja.",
    descLarga: "Perfilado con navaja, la técnica de siempre para un contorno preciso y una piel que no sufre. Se define primero el largo y la forma que acompañan tu cara, después se afila el detalle — línea de cuello, patillas, bigote — con calma, sin apurar el filo.",
    img: "/fotos/barba.png",
    pos: "center 60%",
  },
  {
    nombre: "Diseños craneales",
    desc: "Diseños y hard part a mano alzada.",
    descLarga: "Hard part, líneas y diseños a mano alzada sobre el degradado, para el que quiere algo distinto sin perder prolijidad. Se dibuja directo sobre la máquina, ajustando el diseño a tu forma de cabeza y a cómo crece tu pelo — no es una plantilla, es a medida.",
    img: "/fotos/craneal.jpg",
    pos: "center",
  },
  {
    nombre: "Colorimetría",
    desc: "Color, mechas y tratamientos de color.",
    descLarga: "Color, mechas y tratamientos de color, con la formulación pensada para tu base y el resultado que buscás — no una receta fija. Se evalúa el estado del cabello antes de tocar nada, para que el color dure y no lo dañe.",
    img: "/fotos/color.jpg",
    pos: "center 40%",
  },
];

export const RESEÑAS = [
  { nombre: "Mabel Gamarra", texto: "Excelente peluquería, muy buena atención y los mejores precios de Martínez, recomiendo!!!" },
  { nombre: "Ezequiel Robledo", texto: "El número 1. No tarda veinte años en cortar y encima corta bien. Un lujo." },
  { nombre: "Pablo Guazzetti", texto: "Muy buena atención y excelente los precios." },
];
