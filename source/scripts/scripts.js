document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll(".close-btn");

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.style.display = "none";
        });
    });

    
    const imageIds = [
        "1MfwWAsz8PPVIIP8GGDvW56SAcgGM9YUn",
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
    setInterval(changeImage, 5000); 
});
