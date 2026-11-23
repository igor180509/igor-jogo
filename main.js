// PERGUNTAS DO JOGO

const questions = [

{
question: "1. Qual é a melhor maneira de economizar água ao escovar os dentes?",
answers: [
"Deixar a torneira aberta",
"Fechar a torneira enquanto escova",
"Usar água durante toda a escovação"
],
correct: 1
},

{
question: "2. Qual atividade doméstica costuma gastar mais água?",
answers: [
"Tomar banhos muito demorados",
"Apagar as luzes",
"Assistir televisão"
],
correct: 0
},

{
question: "3. O que devemos fazer ao perceber um vazamento?",
answers: [
"Ignorar o problema",
"Esperar a conta chegar",
"Consertar o vazamento rapidamente"
],
correct: 2
},

{
question: "4. Qual é uma boa maneira de reutilizar água?",
answers: [
"Utilizar água da chuva para lavar quintais",
"Jogar água limpa na rua",
"Deixar a mangueira ligada"
],
correct: 0
},

{
question: "5. Qual atitude ajuda a economizar água ao lavar a louça?",
answers: [
"Deixar a torneira aberta",
"Ensaboar tudo com a torneira fechada",
"Lavar um prato por vez com água corrente"
],
correct: 1
},

{
question: "6. Por que devemos economizar água?",
answers: [
"Porque ela não tem utilidade",
"Porque existe água infinita no planeta",
"Porque a água potável é um recurso limitado"
],
correct: 2
},

{
question: "7. Qual dessas atitudes desperdiça mais água?",
answers: [
"Tomar banhos rápidos",
"Lavar a calçada com mangueira",
"Usar um balde para limpar o quintal"
],
correct: 1
},

{
question: "8. O que podemos fazer para economizar água no banho?",
answers: [
"Diminuir o tempo no chuveiro",
"Deixar o chuveiro ligado antes e depois",
"Tomar banhos mais demorados"
],
correct: 0
},

{
question: "9. Qual é a importância das florestas para a água?",
answers: [
"Não possuem relação com a água",
"Ajudam a proteger nascentes e o ciclo da água",
"Aumentam o desperdício de água"
],
correct: 1
},

{
question: "10. Qual atitude representa o consumo consciente de água?",
answers: [
"Usar água sem preocupação",
"Desperdiçar água ao lavar veículos",
"Utilizar somente a quantidade necessária"
],
correct: 2
}

];


// VARIÁVEIS

let currentQuestion = 0;

let score = 0;


// ELEMENTOS

const questionElement = document.getElementById("question");

const answerButtons = document.querySelectorAll(".answer");

const questionNumber = document.getElementById("question-number");

const scoreElement = document.getElementById("score");

const feedback = document.getElementById("feedback");

const nextButton = document.getElementById("next-button");

const progress = document.getElementById("progress");

const nicknameInput = document.getElementById("nickname");

nicknameInput.addEventListener("input", () => {

nicknameInput.setCustomValidity("");

});


// CONTROLE DAS TELAS

function hideAllScreens() {

const screens = [

"start-screen",
"nickname-screen",
"story-screen",
"quiz-screen",
"game-over-screen",
"win-screen",
"credits-screen"

];

screens.forEach(id => {

document.getElementById(id).classList.add("hidden");

});

}


// TELA DE NICKNAME

function showNickname() {

hideAllScreens();

document.getElementById("nickname-screen").classList.remove("hidden");

nicknameInput.focus();

}


function startWithNickname(event) {

event.preventDefault();

const nickname = nicknameInput.value.trim();

if (!nickname) {

nicknameInput.setCustomValidity("Digite um nickname para continuar.");

nicknameInput.reportValidity();

return;

}

document.getElementById("player-name").textContent = nickname;

showStory();

}


// TELA DA HISTÓRIA

function showStory() {

hideAllScreens();

document.getElementById("story-screen").classList.remove("hidden");

}


// COMEÇAR JOGO

function startGame() {

currentQuestion = 0;

score = 0;

hideAllScreens();

document.getElementById("quiz-screen").classList.remove("hidden");

loadQuestion();

}


// CARREGAR PERGUNTA

function loadQuestion() {

const question = questions[currentQuestion];

questionElement.textContent = question.question;

questionNumber.textContent =
`Questão ${currentQuestion + 1} de 10`;

scoreElement.textContent = `Pontos: ${score}`;

progress.style.width =
`${((currentQuestion + 1) / 10) * 100}%`;

feedback.textContent = "";

nextButton.style.display = "none";

answerButtons.forEach((button, index) => {

button.textContent = question.answers[index];

button.disabled = false;

button.classList.remove("correct", "wrong");

});

}


// ESCOLHER RESPOSTA

function checkAnswer(selected) {

const correctAnswer = questions[currentQuestion].correct;

answerButtons.forEach(button => {

button.disabled = true;

});


// CAMINHO DA VITÓRIA PARCIAL

if (selected === correctAnswer) {

score++;

scoreElement.textContent = `Pontos: ${score}`;

answerButtons[selected].classList.add("correct");

feedback.textContent = "✅ Resposta correta! Você está salvando Hidrópolis!";

feedback.style.color = "green";

nextButton.style.display = "inline-block";

if (currentQuestion === 9) {

nextButton.textContent = "CONCLUIR MISSÃO";

}

}


// CAMINHO DO GAME OVER

else {

answerButtons[selected].classList.add("wrong");

answerButtons[correctAnswer].classList.add("correct");

feedback.textContent = "❌ Você tomou uma decisão errada! A missão falhou.";

feedback.style.color = "red";

setTimeout(() => {

showGameOver();

}, 1800);

}

}


// PRÓXIMA PERGUNTA

function nextQuestion() {

currentQuestion++;

if (currentQuestion < questions.length) {

loadQuestion();

} else {

showWin();

}

}


// FINAL GAME OVER

function showGameOver() {

hideAllScreens();

document.getElementById("game-over-screen").classList.remove("hidden");

document.getElementById("lost-score").textContent = score;

}


// FINAL VITÓRIA

function showWin() {

hideAllScreens();

document.getElementById("win-screen").classList.remove("hidden");

}


// CRÉDITOS

function showCredits() {

hideAllScreens();

document.getElementById("credits-screen").classList.remove("hidden");

}


// REINICIAR JOGO

function restartGame() {

currentQuestion = 0;

score = 0;

hideAllScreens();

document.getElementById("start-screen").classList.remove("hidden");

}
