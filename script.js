const inicio = document.getElementById("inicio");
const mapa = document.getElementById("mapa");
const mensaje = document.getElementById("mensaje");

document.getElementById("entrar").addEventListener("click", () => {
  inicio.classList.add("oculto");
  mapa.classList.remove("oculto");
  mensaje.textContent = "¡Bienvenido! Selecciona el nivel 1.";
});

document.getElementById("volver").addEventListener("click", () => {
  mapa.classList.add("oculto");
  inicio.classList.remove("oculto");
});

document.querySelectorAll("[data-nivel]").forEach((boton) => {
  boton.addEventListener("click", () => {
    const nivel = Number(boton.dataset.nivel);

    if (nivel === 9) {
      mensaje.textContent =
        "¡Llegaste a la cascada! Aquí estará el examen final.";
    } else {
      mensaje.textContent =
        `Seleccionaste el nivel ${nivel}. Aquí irá su lección.`;
    }
  });
});
