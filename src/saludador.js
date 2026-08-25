function saludar(nombre, genero, edad) {
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

  if(edad> 30){
    if (genero === "masculino") {
      generoSaludo = "Sr.";
    } else {
      generoSaludo = "Sra.";
    }
  }else{
    if (genero === "masculino") {
      generoSaludo = "Joven";
    }else{
      generoSaludo = "Señorita";
    }
  }

  return `${saludo}, ${generoSaludo} ${nombre}!`;
}


export default saludar;