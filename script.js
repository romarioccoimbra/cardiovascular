//questoes

const quizData = [
  {
    question:
      "Qual das seguintes opções descreve a função principal do coração?",
    options: [
      "Bombear sangue para os pulmões",
      "Filtrar resíduos do sangue",
      "Regular a temperatura corporal",
      "Bombear sangue para todo o corpo",
    ],
    correctAnswer: "Bombear sangue para todo o corpo",
    explanation:
      "O coração é responsável por bombear o sangue para todo o corpo, fornecendo oxigênio e nutrientes às células e removendo resíduos metabólicos.",
  },
  {
    question:
      "Qual das seguintes câmaras do coração recebe sangue oxigenado dos pulmões?",
    options: [
      "Átrio direito",
      "Átrio esquerdo",
      "Ventrículo direito",
      "Ventrículo esquerdo",
    ],
    correctAnswer: "Átrio esquerdo",
    explanation:
      "O átrio esquerdo recebe sangue oxigenado dos pulmões através das veias pulmonares.",
  },
  {
    question:
      "Qual dos seguintes vasos sanguíneos transporta sangue para fora do coração?",
    options: ["Artéria", "Veia", "Capilar", "Vênula"],
    correctAnswer: "Artéria",
    explanation:
      "As artérias são vasos sanguíneos que transportam sangue rico em oxigênio para fora do coração e para os tecidos do corpo.",
  },
  {
    question:
      "Qual das seguintes afirmativas descreve corretamente a função das válvulas cardíacas?",
    options: [
      "Impedir o fluxo sanguíneo para os pulmões",
      "Regular o fluxo sanguíneo através do coração",
      "Transportar nutrientes para as células cardíacas",
      "Produzir células sanguíneas",
    ],
    correctAnswer: "Regular o fluxo sanguíneo através do coração",
    explanation:
      "As válvulas cardíacas controlam o fluxo sanguíneo unidirecional através do coração, evitando refluxo e garantindo um fluxo eficiente de sangue.",
  },
  {
    question: "O que causa um ataque cardíaco?",
    options: [
      "Bloqueio de uma artéria coronária",
      "Ruptura de uma veia pulmonar",
      "Aumento da pressão arterial sistólica",
      "Acúmulo de gordura nos músculos cardíacos",
    ],
    correctAnswer: "Bloqueio de uma artéria coronária",
    explanation:
      "Um ataque cardíaco ocorre quando uma artéria coronária está bloqueada, impedindo o fluxo sanguíneo para uma parte do músculo cardíaco, levando à lesão ou morte das células cardíacas.",
  },
  {
    question:
      "Qual dos seguintes fatores é um importante fator de risco para doenças cardiovasculares?",
    options: [
      "Exercício regular",
      "Alimentação equilibrada",
      "Tabagismo",
      "Controle adequado do estresse",
    ],
    correctAnswer: "Tabagismo",
    explanation:
      "O tabagismo é um importante fator de risco para doenças cardiovasculares, incluindo aterosclerose e doença arterial coronariana.",
  },
  {
    question: "O que é a pressão arterial sistólica?",
    options: [
      "A pressão do sangue nas artérias durante a contração do coração",
      "A pressão do sangue nas artérias durante o relaxamento do coração",
      "A pressão do sangue nas veias durante a contração do coração",
      "A pressão do sangue nas veias durante o relaxamento do coração",
    ],
    correctAnswer:
      "A pressão do sangue nas artérias durante a contração do coração",
    explanation:
      "A pressão arterial sistólica é a pressão do sangue nas artérias durante a contração do coração (sístole), quando o coração está bombeando sangue para o resto do corpo.",
  },
  {
    question: "O que são as veias varicosas?",
    options: [
      "Veias dilatadas e tortuosas devido ao enfraquecimento das paredes venosas",
      "Veias estreitas e rígidas devido ao acúmulo de placas de gordura",
      "Veias bloqueadas devido a coágulos sanguíneos",
      "Veias ausentes devido a má formação congênita",
    ],
    correctAnswer:
      "Veias dilatadas e tortuosas devido ao enfraquecimento das paredes venosas",
    explanation:
      "As veias varicosas são veias dilatadas e tortuosas que ocorrem devido ao enfraquecimento das paredes venosas, resultando em uma incapacidade das válvulas venosas de funcionar corretamente.",
  },
  {
    question: "O que é um eletrocardiograma (ECG ou EKG)?",
    options: [
      "Um exame de imagem do coração",
      "Um teste de estresse cardíaco",
      "Um registro da atividade elétrica do coração",
      "Um procedimento cirúrgico para reparar válvulas cardíacas",
    ],
    correctAnswer: "Um registro da atividade elétrica do coração",
    explanation:
      "Um eletrocardiograma é um registro da atividade elétrica do coração, usado para diagnosticar condições cardíacas, como arritmias e problemas de condução elétrica.",
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
