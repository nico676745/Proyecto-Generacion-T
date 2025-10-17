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

// --- Envío de pregunta por correo con confirmación ---
document.getElementById("preguntaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    const asunto = encodeURIComponent(`Nueva pregunta de ${nombre}`);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nPregunta:\n${mensaje}`);
    const mailtoLink = `mailto:alanponce419@gmail.com?subject=${asunto}&body=${cuerpo}`;

    // --- Confirmación antes de abrir el cliente de correo ---
    const confirmar = confirm(
        "Se abrirá tu aplicación de correo para enviar este mensaje.\n\n¿Deseas continuar?"
    );

    if (confirmar) {
        window.location.href = mailtoLink;
    } else {
        alert("Envío cancelado.");
    }
});
