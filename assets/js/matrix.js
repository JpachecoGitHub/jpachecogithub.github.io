document.addEventListener("DOMContentLoaded", () => {
  const botonMatrix = document.getElementById("btn-matrix")
  const matrixRain = document.getElementById("matrix-rain")

  const caracteres =
    "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  botonMatrix.addEventListener("click", () => {
    document.body.classList.toggle("matrix-mode")

    if (document.body.classList.contains("matrix-mode")) {
      botonMatrix.textContent = "⚪ Modo Normal"
      crearLluviaMatrix()
    } else {
      botonMatrix.textContent = "🟢 Modo Matrix"
      matrixRain.innerHTML = ""
    }
  })

  const crearLluviaMatrix = () => {
    matrixRain.innerHTML = ""

    const cantidadColumnas = Math.floor(window.innerWidth / 20)

    for (let i = 0; i < cantidadColumnas; i++) {
      const columna = document.createElement("div")

      columna.classList.add("matrix-column")

      let texto = "";

      for (let j = 0; j < 25; j++) {
        const caracter =
          caracteres[Math.floor(Math.random() * caracteres.length)]

        texto += caracter + "<br>"
      }

      columna.innerHTML = texto;

      columna.style.left = i * 20 + "px"
      columna.style.animationDuration =
        Math.random() * 4 + 3 + "s"

      columna.style.animationDelay =
        Math.random() * 5 + "s"

      matrixRain.appendChild(columna)
    }
  }
})