function saludar(nombre) {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo = `Buenas noches, ${nombre}!`;
  if (horaActual < 12) {
    saludo = `Buenos días, ${nombre}!`;
  }
  if (horaActual < 19) {
    saludo = `Buenas tardes, ${nombre}!`;
  }
  return saludo;
}

export default saludar;