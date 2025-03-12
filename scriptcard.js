const flashcard = document.getElementById("flashcard");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const flipBtn = document.getElementById("flip");
const addCardBtn = document.getElementById("addCard");
const clearCardsBtn = document.getElementById("clearCards");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const saveCardBtn = document.getElementById("saveCard");
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

let currentCardIndex = 0;
let showQuestion = true;

// Recuperar tarjetas de localStorage o usar una lista vacía
let cards = JSON.parse(localStorage.getItem("flashcards")) || [];

// Función para mostrar la tarjeta actual con animación
function showCard() {
    if (cards.length === 0) {
        flashcard.innerHTML = `<div class="front">No hay tarjetas</div>
                               <div class="back">Añade una nueva</div>`;
    } else {
        const card = cards[currentCardIndex];

        flashcard.classList.add("flipped");

        setTimeout(() => {
            flashcard.innerHTML = showQuestion
                ? `<div class="front">${card.question}</div><div class="back">${card.answer}</div>`
                : `<div class="front">${card.answer}</div><div class="back">${card.question}</div>`;

            flashcard.classList.remove("flipped");
        }, 300);
    }
}

// Voltear la tarjeta con animación
flipBtn.addEventListener("click", () => {
    showQuestion = !showQuestion;
    showCard();
});

// Cambiar a la siguiente tarjeta
nextBtn.addEventListener("click", () => {
    if (cards.length > 0) {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        showQuestion = true;
        showCard();
    }
});

// Cambiar a la tarjeta anterior
prevBtn.addEventListener("click", () => {
    if (cards.length > 0) {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        showQuestion = true;
        showCard();
    }
});

// Abrir el modal para agregar una tarjeta
addCardBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Guardar nueva tarjeta
saveCardBtn.addEventListener("click", () => {
    const newQuestion = questionInput.value.trim();
    const newAnswer = answerInput.value.trim();

    if (newQuestion && newAnswer) {
        cards.push({ question: newQuestion, answer: newAnswer });
        localStorage.setItem("flashcards", JSON.stringify(cards));
        questionInput.value = "";
        answerInput.value = "";
        modal.style.display = "none";
        currentCardIndex = cards.length - 1;
        showQuestion = true;
        showCard();
    }
});

// Borrar todas las tarjetas
clearCardsBtn.addEventListener("click", () => {
    localStorage.removeItem("flashcards");
    cards = [];
    currentCardIndex = 0;
    showQuestion = true;
    showCard();
});

// Cargar la primera tarjeta al inicio
showCard();
