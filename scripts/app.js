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
    descripcion: "Hablale al microfono y traduce cada palabra que digas a el lenguaje de señas que quieras .",
    imagen: "/img/icono1.webp",
    color: "#1e8fff6e"
  },
  {
    titulo: "Diccionario",
    descripcion: "Consulta cada palabra que quieras saber en el diccionario donde encontraras todas las secciones de idiomas(Por ahora solo en LSA)).",
    imagen: "/img/icono2.webp",
    color: "#1e8fff6e"
  },
  {
    titulo: "Editor de modelo",
    descripcion: "modifica facilmente el aspecto de tu modelo el cual te estara traduciento cada palabra (cualquiera puede subir sus personajes 3d de foram grautita).",
    imagen: "/img/icono3.webp",
    color: "#1e8fff6e"
  },
  {
    titulo: "Traductor de pantalla",
    descripcion: "trasnmite tu audio de la computadora a la app y empieza a traducir cada palabra que se escuche en tus videos , series y peliculas",
    imagen: "/img/icono4.webp",
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

