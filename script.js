//questoes

const quizData = [
  {
    question: "O sangue é bombeado pelo coração nos seguintes compartimentos:",
    options: [
      "Átrio esquerdo, Átrio direito, Ventrículo esquerdo, Ventrículo direito.",
      "Veias e artérias.",
      "Capilares e Ossos.",
      "Artéria Aorta, Veias pulmonares.",
    ],
    correctAnswer:
      "Átrio esquerdo, Átrio direito, Ventrículo esquerdo, Ventrículo direito.",
    explanation:
      "O sangue venoso entra pelo Átrio direito, passa pelo Ventrículo direito e é bombeado para os pulmões, depois de oxigenado o sangue retorna ao Átrio esquerdo e pelo Ventrículo esquerdo é bombeado para todo o corpo.",
  },
];

// codigo
const questionElement = document.getElementById("questao");
const optionsElement = document.getElementById("opcao");
const explanationElement = document.getElementById("explicacao");
const nextButton = document.getElementById("prox-btn");

let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(option === currentQuestion.correctAnswer)
    );
    optionsElement.appendChild(button);
  });

  explanationElement.textContent = "";
  nextButton.style.display = "none";
}

function checkAnswer(isCorrect) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (isCorrect) {
    explanationElement.textContent =
      "Resposta correta! " + currentQuestion.explanation;
    explanationElement.style.color = "green";
  } else {
    explanationElement.textContent =
      "Resposta incorreta. A resposta correta é: " +
      currentQuestion.correctAnswer +
      ". " +
      currentQuestion.explanation;
    explanationElement.style.color = "red";
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex > quizData.length) {
    currentQuestionIndex = 0;
  }
  loadQuestion();
});

loadQuestion();
