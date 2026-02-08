const quizData = [
  {
    question: "real name of spiderman",
    options: [
       "Peter Parker",
        "Narendra modi",
        "Bruce wayne",
        "Tony Stark"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },

];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  const currentQuestion = quizData[currentIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => selectAnswer(index, btn);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex, selectedBtn) {
  const correctIndex = quizData[currentIndex].correct;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach(btn => (btn.disabled = true));

  if (selectedIndex === correctIndex) {
    score++;
    selectedBtn.style.background = "#4caf50";
  } else {
    selectedBtn.style.background = "#f44336";
    buttons[correctIndex].style.background = "#4caf50";
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.innerText = "Quiz Finished!";
  answersEl.innerHTML = `
    <p style="font-size:18px; text-align:center;">
      Your Score: <b>${score}</b> / ${quizData.length}
    </p>
  `;
  nextBtn.style.display = "none";
}

loadQuestion();