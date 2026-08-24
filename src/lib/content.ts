export const WHATSAPP_NUMBER = "5491140307491";

/** WhatsApp de Joaquín (autor de la demo), NO el del negocio.
 *  Es la única vía que tiene Leonardo para contestar. */
export const WHATSAPP_AUTOR = `https://wa.me/5491133905237?text=${encodeURIComponent(
  "Hola Joaquín! Vi la demo que hiciste para Maccia"
)}`;

/** Link de WhatsApp con el mensaje precargado según desde dónde se clickea.
 *  Sin esto, alguien que pregunta por el curso le llega pidiendo un turno. */
export function waLink(mensaje: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

/** Turno genérico — nav, hero y cierre. */
export const WHATSAPP_LINK = waLink("Hola! Quiero reservar un turno en Maccia Peluquería");

/** Consulta por la Academia — no es lo mismo que pedir turno. */
export const WHATSAPP_ACADEMIA = waLink("Hola! Quiero info sobre el curso de la Academia (precio, días y cuándo arranca la próxima camada)");

export const SERVICIOS = [
  {
    nombre: "Corte",
    consulta: "Hola! Quiero reservar un turno para corte",
    desc: "Corte clásico o de tendencia, adaptado a tu estilo.",
    descLarga: "Clásico o de tendencia, a tijera o a máquina, siempre pensado para tu tipo de cabello y la forma de tu cara — no al revés. Antes de cortar, charla corta: qué tenés, qué buscás y cómo lo vas a mantener en casa. De ahí sale el resultado, no de una foto de Instagram.",
    img: "/fotos/corte-fade.png",
    pos: "center 65%",
    // Foto ancha (Unsplash, licencia libre) para el bloque grande de /blanco —
    // corte-fade.png es un primer plano muy cerrado, se ve mal estirado a ese formato.
    imgBloque: "/fotos/corte-ambiente.jpg",
    posBloque: "65% center",
  },
  {
    nombre: "Barba",
    consulta: "Hola! Quiero reservar un turno para barba",
    desc: "Perfilado y arreglo de barba con navaja.",
    descLarga: "Perfilado con navaja, la técnica de siempre para un contorno preciso y una piel que no sufre. Se define primero el largo y la forma que acompañan tu cara, después se afila el detalle — línea de cuello, patillas, bigote — con calma, sin apurar el filo.",
    img: "/fotos/barba.png",
    pos: "center 60%",
    imgBloque: "/fotos/barba-ambiente.jpg",
    posBloque: "30% 30%",
  },
  {
    nombre: "Diseños craneales",
    consulta: "Hola! Quiero consultar por un diseño craneal",
    desc: "Diseños y hard part a mano alzada.",
    descLarga: "Hard part, líneas y diseños a mano alzada sobre el degradado, para el que quiere algo distinto sin perder prolijidad. Se dibuja directo sobre la máquina, ajustando el diseño a tu forma de cabeza y a cómo crece tu pelo — no es una plantilla, es a medida.",
    img: "/fotos/craneal.jpg",
    pos: "center",
  },
  {
    nombre: "Colorimetría",
    consulta: "Hola! Quiero consultar por colorimetría (color, mechas o tratamiento)",
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
