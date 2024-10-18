document.addEventListener("DOMContentLoaded", function() {
    var cuadros = document.querySelectorAll(".formato");

    cuadros.forEach(function(cuadro) {
        cuadro.addEventListener("click", function() {
            if (!cuadro.classList.contains("guardado")) {
                mostrarFormulario(cuadro);
            }
        });
    });

    function mostrarFormulario(cuadro) {
        var formulario = document.createElement("form");
        formulario.id = "formulario"; 
        formulario.innerHTML = `
            <label for="nombre">Nombre y Apellido:</label>
            <input type="text" id="nombre" name="nombre" required><br>
            <label for="cedula">C.I:</label>
            <input type="text" id="cedula" name="cedula" required><br>
            <button onclick="abrir('https://www.brou.com.uy/')">Pagar UYU 2000</button>

        `;
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            cuadro.style.backgroundColor = "red";
            cuadro.classList.add("guardado");
            formulario.parentNode.removeChild(formulario);
        });

        
        formulario.style.position = "fixed";
        formulario.style.top = "50%";
        formulario.style.left = "50%";
        formulario.style.transform = "translate(-50%, -50%)";
        formulario.style.width = "180px"; 
        formulario.style.padding = "10px";
        formulario.style.backgroundColor = "white";
        formulario.style.border = "2px solid black";
        formulario.style.borderRadius = "5px";
        formulario.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
        formulario.style.zIndex = "9999";

        document.body.appendChild(formulario);
    }
});
