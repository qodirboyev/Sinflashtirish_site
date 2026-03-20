// ===================== TEST (10 SAVOL) =====================

const questions = [
    { q: "Qaysi algoritm ehtimollikka asoslanadi?", correct: "A" },
    { q: "Qaysi algoritm qo‘shnilar asosida ishlaydi?", correct: "B" },
    { q: "Naive Bayes tez ishlaydimi?", correct: "A" },
    { q: "KNN aniqligi yuqorimi?", correct: "A" },
    { q: "KNN sekin ishlaydimi?", correct: "A" },
    { q: "Naive Bayes mustaqillikni qabul qiladimi?", correct: "A" },
    { q: "KNN dagi K nimani bildiradi?", correct: "B" },
    { q: "Naive Bayes katta datasetlarda samaralimi?", correct: "A" },
    { q: "KNN oldindan o‘rganadimi (training)?", correct: "B" },
    { q: "Classification nima?", correct: "A" }
];

let userAnswers = [];

// Savollarni chiqarish
function loadQuiz() {
    let container = document.getElementById("quiz-container");
    container.innerHTML = "";

    questions.forEach((item, index) => {
        container.innerHTML += `
            <p>${index + 1}. ${item.q}</p>
            <button onclick="answer(${index}, 'A')">A</button>
            <button onclick="answer(${index}, 'B')">B</button>
        `;
    });
}

// Javobni saqlash
function answer(index, ans) {
    userAnswers[index] = ans;
}

// Natijani chiqarish
function showResult() {
    let score = 0;

    questions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) score++;
    });

    let message = "";

    if (score >= 8) {
        message = "🔥 A’lo natija!";
    } else if (score >= 5) {
        message = "👍 Yaxshi!";
    } else {
        message = "😅 Yana o‘rganish kerak";
    }

    document.getElementById("result").innerText =
        `Sizning natijangiz: ${score} / 10\n${message}`;
}


// ===================== O‘YIN =====================

const gameData = [
    {
        q: "Ehtimollikka asoslangan algoritm",
        a: "NB"
    },
    {
        q: "Eng yaqin qo‘shnilar asosida ishlaydi",
        a: "KNN"
    },
    {
        q: "Tez ishlaydi",
        a: "NB"
    },
    {
        q: "Aniqligi yuqori",
        a: "KNN"
    },
    {
        q: "Bayes teoremasiga asoslanadi",
        a: "NB"
    }
];

let currentGame;

// Yangi savol
function newGame() {
    let rand = Math.floor(Math.random() * gameData.length);
    currentGame = gameData[rand];

    document.getElementById("gameQuestion").innerText = currentGame.q;
    document.getElementById("gameResult").innerText = "";
}

// Tekshirish
function checkGame(choice) {
    if (choice === currentGame.a) {
        document.getElementById("gameResult").innerText = "To‘g‘ri! 🔥";
    } else {
        document.getElementById("gameResult").innerText = "Xato 😅";
    }

    setTimeout(newGame, 1500);
}


// ===================== START =====================

window.onload = function () {
    loadQuiz();
    newGame();
};