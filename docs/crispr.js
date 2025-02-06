document.addEventListener("DOMContentLoaded", function () {
    fetch("../Investigaciones/protocolo-phi-crispr.md")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo Markdown.");
            }
            return response.text();
        })
        .then(text => {
            document.getElementById("content").innerHTML = marked.parse(text);
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("content").innerHTML = "Error al cargar el archivo.";
        });
});
