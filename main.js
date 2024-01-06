function realizarPregunta(pregunta, respuestaCorrecta, mensajeCorrecto) {
  let respuestaUsuario = prompt(pregunta);
  if (respuestaUsuario && respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    alert("¡Correcto! " + mensajeCorrecto);
    puntos++;
  } else {
    alert("Incorrecto. La respuesta correcta es " + respuestaCorrecta);
  }
}

function preguntarContinuar() {
  let respuesta = prompt("¿Quieres continuar jugando? (Sí/No)");
  return respuesta && respuesta.toLowerCase() === "si";
}


let puntos;

do {

  puntos = 0;
  alert("BIENVENIDO AL JUEGO DE LA TRIVIA")
  alert("En las primeras 2 preguntas no tendras opciones. tendras que ESCRIBIR la opcion correcta")
  realizarPregunta("Pregunta 1: ¿Cual es el animal mas grande?", "ballena", "el animal mas grande puede alcanzar hasta unos 30 metros");
  realizarPregunta("Pregunta 2: ¿Cual es el tercer planeta del sistema solar?", "tierra", "el tercer planeta del sistema solar es la Tierra");
  alert("En estas preguntas, la modalidad cambia. Ahora sera multiplechoice. Ingresa la opcion correcta. Por ejempl: B")
  realizarPregunta("Pregunta 3: ¿Cuál es la capital de Francia?\na) Madrid\nb) París \nc) Oporto \nd) Burgos", "b", "París es la capital de Francia");
  realizarPregunta("Pregunta 4: ¿Cuál de los siguientes instrumentos musicales es de viento?\na) Piano \nb) Guitarra \nc) flauta \nd) bateria", "c", "La flauta es un instrumento de viento");
  realizarPregunta("Pregunta 5: ¿Cuánto es 8 multiplicado por 7?\na)87 \nb)45 \nc)67 \nd)56", "d", "El resultado es 56");
  realizarPregunta("Pregunta 6: ¿En qué año comenzó la Primera Guerra Mundial? \na)1960 \nb)1914 \nc)1970 \nd)1830", "b", "La guerra comenzó en 1914");
  realizarPregunta("Pregunta 7: ¿Cuál fue el primer presidente de los Estados Unidos? \na)George Washington \nb) Thomas Jefferson \nc) Abraham Lincoln\nd) Barack Obama", "a", "El primer presidente de EE.UU. fue George Washington");
  realizarPregunta("Pregunta 8: ¿Qué famoso pintor es conocido por su obra La Noche Estrellada? \na)Vincent van Gogh\nb)Leonardo da Vinci\nc)Pablo Picasso", "a", "El autor es Vincent van Gogh");
  realizarPregunta("Pregunta 9: ¿Cuál es la película animada de Disney que cuenta la historia de Simba, un león joven que debe enfrentar su destino como rey?\na)El rey leon \nb)Buscando a Nemo \nc)Toy Story \nd)Mulan", "a", "La pelicula es El Rey Leon");
  realizarPregunta("Pregunta 10: ¿Quién es el autor de la novela Cien años de soledad?\na)Isabel Allende \nb)Mario Vargas Llosa \nc)Gabriel García Márquez", "c", "Gabriel Garcia Marquez es el autor de Cien años de soledad");


  alert("Terminaste la trivia, tu puntuación es " + puntos);

} while (preguntarContinuar());
