function descargar(sistema) {
    const contenido = `Gracias por descargar TAS para ${sistema}.
Requisitos mínimos:
- Consulta la página oficial para más información.
Versión 1.0.0`;

    const blob = new Blob([contenido], { type: "text/plain" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `TAS_${sistema}.txt`;
    enlace.click();
    URL.revokeObjectURL(enlace.href);
}





// --- Función de descarga simulada ---
    function descargar(sistema) {
      const contenido = `Gracias por descargar TAS para ${sistema}.
Requisitos mínimos:
- Consulta la página oficial para más información.
Versión 1.0.0`;
      const blob = new Blob([contenido], { type: "text/plain" });
      const enlace = document.createElement("a");
      enlace.href = URL.createObjectURL(blob);
      enlace.download = `TAS_${sistema}.txt`;
      enlace.click();
      URL.revokeObjectURL(enlace.href);
    }

    // --- Datos de versiones ---
    const versiones = [
      {
        version: "1.0.0",
        fecha: "10/03/2025",
        cambios: "Versión inicial pública",
        app: "/descargas/TAS_v1.0.0.zip",
        codigo: "https://github.com/nico676745/Proyecto-Generacion-T"
      },
      {
        version: "1.1.0",
        fecha: "22/06/2025",
        cambios: "Mejoras en rendimiento y nuevo panel de usuario",
        app: "/descargas/TAS_v1.1.0.zip",
        codigo: "https://github.com/nico676745/Proyecto-Generacion-T"
      },
      {
        version: "1.2.0",
        fecha: "05/10/2025",
        cambios: "Compatibilidad ampliada y correcciones de errores",
        app: "/descargas/TAS_v1.2.0.zip",
        codigo: "https://github.com/nico676745/Proyecto-Generacion-T"
      }
    ];

    // --- Generar tabla dinámicamente ---
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    versiones.forEach(v => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${v.version}</td>
        <td>${v.fecha}</td>
        <td>${v.cambios}</td>
        <td><a href="${v.app}" class="btn-descargar" download>App</a></td>
        <td><a href="${v.codigo}" class="btn-descargar" target="_blank">Código</a></td>
      `;
      tablaCuerpo.appendChild(fila);
    });