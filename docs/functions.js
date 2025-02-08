function toggleMenu() {
    document.body.classList.toggle("menu-open");
}
async function loadMarkdownFromGitHub(repoOwner, repoName, filePath) {
    const url = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${filePath}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("No se pudo cargar el archivo.");
        const markdown = await response.text();
        const parsedMarkdown = marked.parse(markdown);

        // URL base del repositorio en GitHub
        const repoUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/`;

        // Reemplazar imágenes con rutas relativas por URLs absolutas, sin agregar `alt="image"`
        const updatedMarkdown = parsedMarkdown.replace(/<img src="(?!http)([^"]*)"(?: alt="([^"]*)")?\s*\/?>/g, (match, path, alt) => {
            const fixedPath = path.replace("../", "");
            const altText = alt ? `alt="${alt}"` : ""; // Mantiene alt solo si existe
            return `<img src="${repoUrl}${fixedPath}" style="max-width: 100%; height: auto;">`;
        });

        // Insertar el Markdown corregido en el contenedor
        document.getElementById("markdown-container").innerHTML = updatedMarkdown;

        // Envolver todas las tablas dentro de un contenedor con scroll
        document.querySelectorAll("table").forEach(table => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("table-container");
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });

        // Renderizar fórmulas LaTeX con KaTeX
        renderMathInElement(document.getElementById("markdown-container"), {
            delimiters: [
                {left: "$$", right: "$$", display: true}, // Fórmulas en bloque
                {left: "$", right: "$", display: false}  // Fórmulas en línea
            ]
        });

    } catch (error) {
        document.getElementById("markdown-container").innerHTML = "<p>Error al cargar el archivo.</p>";
    }
}