const timeProgress = document.getElementsByClassName("time-progress")[0]
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const skipButton = document.getElementById("skip");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");

setInterval(() => {
  const coStyle = getComputedStyle(timeProgress)
  const width = parseFloat(coStyle.getPropertyValue('--width')) || 0
  timeProgress.style.setProperty('--width', width + .01)}, 5)

let currentQuestionIndex = 0;
let score = 0;

const quiz = [
  {
    question: "What is the hottest planet?",
    choices: ["Earth", "Sun", "Jupiter", "Venus"],
    answer: 3
  },
  
  {
    question: "Who inveted Electrecity?",
    choices: ["Enstein", "Bin Douda", "Cristiano Ronaldo", "Nicola Tesla"],
    answer: 2
  },

  {
    question: "Acrophobia is a fear of...",
    choices: ["Heights", "Water", "Spiders", "Dark"],
    answer: 0
  },

  {
    question: "What is the courrency of China",
    choices: ["USD", "MAD", "Yuan", "Peso"],
    answer: 2
  },

  {
    question: "What is national animal of Australia?",
    choices: ["Tiger", "Lion", "Kangaroo", "Eagle"],
    answer: 2
  },
  
  // ajouter des question.    bababouwi
];

function showQuestion() {
  const question = quiz[currentQuestionIndex];
  questionEl.innerText = question.question;

  choicesEl.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.innerText = choice;
    li.dataset.index = index;
    li.onclick = checkAnswer;
    choicesEl.appendChild(li);
  });
}

function skip() { 
  if (currentQuestionIndex === quiz.length) {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    document.getElementById("score").innerText = score;
  }
  currentQuestionIndex++;
  showQuestion();
}

function checkAnswer(e) {
  const chosenAnswer = parseInt(e.target.dataset.index);
  const question = quiz[currentQuestionIndex];

  if (chosenAnswer === question.answer) {
    score++;
  }

  currentQuestionIndex++;
  
  if (currentQuestionIndex === quiz.length) {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    document.getElementById("score").innerText = score;
  } else{
    showQuestion();
  }
}

showQuestion();