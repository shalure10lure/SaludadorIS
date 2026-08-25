import saludar from "./saludador.js";

const nombreInput = document.querySelector("#nombre");

const generoInput = document.querySelector("#genero");
const form = document.querySelector("#saluda-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInput.value;

  div.innerHTML = "<p>" + saludar(nombre, genero) + "</p>";
});
