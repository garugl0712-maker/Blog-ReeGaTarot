// Modo oscuro
document.getElementById("darkMode").onclick = () => {
    document.body.classList.toggle("dark");
};

// Formulario a WhatsApp
document.getElementById("formConsulta").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, soy ${nombre}. Mi consulta es: ${mensaje}`;
    const url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});
