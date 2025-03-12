document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll(".close-btn");

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.style.display = "none";
        });
    });

    
    const imageIds = [
        "13LcPZrGKwGI6Bnnl0IOH2BLTPMrnUyPl",
        "1D1rw3dtrbL-LVmhZTFTVhgqqMM3QOLDj",
        "1s9PeBDT3y5r_lAVGNO_4c6ZlC8w7KnRr",  
        "1D8H7g5HY0IIscv8LFx_f4HbEdr1_viA7"  
    ];

    const imageElement = document.getElementById("dynamic-image");
    let index = 0;

    function changeImage() {
        imageElement.src = `https://drive.google.com/thumbnail?id=${imageIds[index]}`;
        index = (index + 1) % imageIds.length; 
    }

    changeImage(); 
    setInterval(changeImage, 1000); 
});


const frasesMotivadoras = [
    "El esfuerzo de hoy es el éxito de mañana.",
    "Cada página que lees te acerca a tu meta.",
    "No estudies hasta que entiendas, estudia hasta que no puedas olvidar.",
    "La disciplina es el puente entre metas y logros.",
    "Pequeños progresos diarios suman grandes resultados.",
    "Tu futuro se construye con lo que haces hoy, no mañana.",
    "El conocimiento es poder, y tú tienes la llave.",
    "Si fuera fácil, todos lo harían.",
    "No se trata de ser el mejor, sino de ser mejor que ayer.",
    "Persiste hasta que el estudio se convierta en tu hábito."
];


function actualizarFrases() {
    const parrafos = document.querySelectorAll(".motivational p");
    parrafos.forEach((p, index) => {
        p.textContent = frasesMotivadoras[(index + Math.floor(Math.random() * frasesMotivadoras.length)) % frasesMotivadoras.length];
    });
}

setInterval(actualizarFrases, 5000);