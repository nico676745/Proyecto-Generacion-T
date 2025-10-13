// Cargar secciones sin recargar página (SPA simple)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (href.endsWith(".html") && !link.classList.contains("active")) {
      e.preventDefault();
      fetch(href)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const nuevo = parser.parseFromString(html, "text/html").querySelector("section");
          document.querySelector("section")?.replaceWith(nuevo);
          history.pushState(null, "", href);
        });
    }
  });
});


document.querySelectorAll("a[href$='.html']").forEach(link => {
    link.addEventListener("click", e => {
      if (link.classList.contains("active")) return;
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    });
  });


// =====================
// FUNCIONES DINÁMICAS
// =====================

const funciones = [
  {
    titulo: "Traductor",
    descripcion: "Traduce texto al instante desde varios idiomas sin salir de la app.",
    imagen: "img/icono1.png",
    color: "#1e8fff6e"
  },
  {
    titulo: "Diccionario",
    descripcion: "Consulta definiciones y sinónimos de manera rápida y sin conexión.",
    imagen: "img/icono2.png",
    color: "#1e8fff6e"
  },
  {
    titulo: "Editor de modelo",
    descripcion: "Crea, modifica y entrena tus propios modelos de lenguaje fácilmente.",
    imagen: "img/icono3.png",
    color: "#1e8fff6e"
  },
  {
    titulo: "Traductor de pantalla",
    descripcion: "Selecciona texto en cualquier app y tradúcelo con un solo toque.",
    imagen: "img/icono4.png",
    color: "#1e8fff6e"
  }
];

// Renderizar dinámicamente las funciones
const contenedor = document.getElementById("funciones-contenedor");

if (contenedor) {
  funciones.forEach((f, i) => {
    const bloque = document.createElement("div");
    bloque.classList.add("funcion-item");
    if (i % 2 !== 0) bloque.classList.add("reverse");
    bloque.style.background = f.color;

    bloque.innerHTML = `
      <div class="funcion-texto">
        <h3>${f.titulo}</h3>
        <p>${f.descripcion}</p>
      </div>
      <div class="funcion-img">
        <img src="${f.imagen}" alt="${f.titulo}">
      </div>
    `;
    contenedor.appendChild(bloque);
  });
}

