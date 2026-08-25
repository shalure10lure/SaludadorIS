function saludar(nombre, genero, edad, idioma) {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo;
  let generoSaludo = "";

  if (idioma === "es") {
    if(nombre === ""){
      nombre = "visitante";
    }
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
  }else if (idioma === "en") {
    if(nombre === ""){
      nombre = "visitor";
    }
    if (horaActual < 12) {
      saludo = "Good morning";
    } else if (horaActual < 19) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }

    if(edad> 30){
      if (genero === "masculino") {
        generoSaludo = "Mr.";
      } else {
        generoSaludo = "Mrs.";
      }
    }else{
      if (genero === "masculino") {
        generoSaludo = "Young man";
      }else{
        generoSaludo = "Miss";
      }
    }
  }

  return `${saludo}, ${generoSaludo} ${nombre}!`;
}


export default saludar;