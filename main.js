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

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const progress = document.getElementById("progress");

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

function checkAnswer(selected) {

const correctAnswer = questions[currentQuestion].correct;

answerButtons.forEach((button, index) => {

button.disabled = true;

if (index === correctAnswer) {
button.classList.add("correct");
}

});

if (selected === correctAnswer) {

score++;

feedback.textContent = " Muito bem! Resposta correta!";

feedback.style.color = "green";

} else {

answerButtons[selected].classList.add("wrong");

feedback.textContent = " Resposta incorreta! Tente aprender com essa questão.";

feedback.style.color = "red";

}

scoreElement.textContent = `Pontos: ${score}`;

nextButton.style.display = "inline-block";

if (currentQuestion === 9) {
nextButton.textContent = "Ver resultado";
}

}

function nextQuestion() {

currentQuestion++;

if (currentQuestion < questions.length) {

loadQuestion();

} else {

showResult();

}

}

function showResult() {

document.getElementById("quiz").classList.add("hidden");

document.getElementById("result").classList.remove("hidden");

document.getElementById("final-score").textContent =
`Você acertou ${score} de 10 questões!`;

let message = "";

if (score <= 3) {

message = "Continue aprendendo! Cada atitude faz diferença para o planeta. ";

} else if (score <= 6) {

message = "Bom trabalho! Você já conhece algumas formas de economizar água! ";

} else if (score <= 9) {

message = "Muito bem! Você sabe bastante sobre preservação da água! ";

} else {

message = "PERFEITO! Você é um verdadeiro defensor da água! ";

}

document.getElementById("message").textContent = message;

}

function restartGame() {

currentQuestion = 0;

score = 0;

document.getElementById("result").classList.add("hidden");

document.getElementById("quiz").classList.remove("hidden");

nextButton.textContent = "Próxima questão";

loadQuestion();

}

loadQuestion();