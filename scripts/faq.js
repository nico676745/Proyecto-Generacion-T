
// --- Mostrar/Ocultar respuestas ---
const preguntas = document.querySelectorAll(".faq-question");
preguntas.forEach(p => {
    p.addEventListener("click", () => {
        p.classList.toggle("active");
        const respuesta = p.nextElementSibling;
        if (respuesta.style.maxHeight) {
            respuesta.style.maxHeight = null;
        } else {
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        }
    });
});

// --- Envío de pregunta por correo ---
document.getElementById("preguntaForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const asunto = encodeURIComponent(`Nueva pregunta de ${nombre}`);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nPregunta:\n${mensaje}`);

    window.location.href = `mailto:alanponce419@gmail.com?subject=${asunto}&body=${cuerpo}`;
});
