function saludar(nombre, genero) {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo;
  let generoSaludo = "";

  if (horaActual < 12) {
    saludo = "Buenos días";
  } else if (horaActual < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  if (genero === "masculino") {
    generoSaludo = "Sr.";
  } else {
    generoSaludo = "Sra.";
  }

  return `${saludo}, ${generoSaludo} ${nombre}!`;
}


export default saludar;