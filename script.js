//questoes

const quizData = [
  {
    question:
      "Qual é o primeiro local por onde o sangue bombeado pelo ventrículo esquerdo do coração passa?",
    options: [
      "Artéria aorta",
      "Veias cavas inferior/superior",
      "Átrio direito",
      "Ventrículo direito",
    ],
    correctAnswer: "Artéria aorta",
    explanation:
      "O sangue é bombeado pela artéria aorta para todo o corpo, onde entrega oxigênio e nutrientes às células.",
  },
  {
    question:
      "Para onde o sangue retorna ao coração após passar pelas veias cavas inferior/superior?",
    options: [
      "Átrio esquerdo",
      "Artéria pulmonar",
      "Ventrículo esquerdo",
      "Átrio direito",
    ],
    correctAnswer: "Átrio direito",
    explanation:
      "O sangue retorna ao coração através do átrio direito após passar pelas veias cavas inferior/superior.",
  },
  {
    question:
      "Qual é o próximo compartimento do coração para onde o sangue passa depois de entrar no átrio direito?",
    options: [
      "Ventrículo direito",
      "Átrio esquerdo",
      "Artéria aorta",
      "Veias pulmonares",
    ],
    correctAnswer: "Ventrículo direito",
    explanation:
      "Após entrar no átrio direito, o sangue passa para o ventrículo direito antes de ser bombeado para os pulmões.",
  },
  {
    question:
      "Onde o sangue oxigenado é bombeado após passar pelo ventrículo direito?",
    options: [
      "Artéria aorta",
      "Veias pulmonares",
      "Artéria pulmonar",
      "Ventrículo esquerdo",
    ],
    correctAnswer: "Artéria pulmonar",
    explanation:
      "O sangue oxigenado é bombeado pela artéria pulmonar para os pulmões, onde recebe oxigênio.",
  },
  {
    question:
      "Como o sangue oxigenado retorna ao coração após passar pelos pulmões?",
    options: [
      "Átrio direito através das veias cavas inferior/superior",
      "Artéria aorta",
      "Ventrículo direito",
      "Átrio esquerdo através das veias pulmonares",
    ],
    correctAnswer: "Átrio esquerdo através das veias pulmonares",
    explanation:
      "O sangue oxigenado volta ao coração pelo átrio esquerdo através das veias pulmonares, completando o ciclo ao entrar novamente no ventrículo esquerdo.",
  },
  {
    question: "Quantas câmaras principais o coração humano possui?",
    options: ["Duas", "Três", "Quatro", "Cinco"],
    correctAnswer: "Quatro",
    explanation:
      "O coração humano possui quatro câmaras principais: dois átrios (átrio direito e átrio esquerdo) e dois ventrículos (ventrículo direito e ventrículo esquerdo).",
  },
  {
    question:
      "Qual das seguintes artérias é responsável por transportar sangue oxigenado para o corpo inteiro a partir do ventrículo esquerdo?",
    options: [
      "Artéria aorta",
      "Artéria pulmonar",
      "Artéria carótida",
      "Artéria renal",
    ],
    correctAnswer: "Artéria aorta",
    explanation:
      "A artéria aorta transporta sangue oxigenado para todo o corpo a partir do ventrículo esquerdo do coração.",
  },
  {
    question:
      "Qual é a válvula localizada entre o átrio esquerdo e o ventrículo esquerdo?",
    options: [
      "Válvula tricúspide",
      "Válvula pulmonar",
      "Válvula aórtica",
      "Válvula mitral",
    ],
    correctAnswer: "Válvula mitral",
    explanation:
      "A válvula mitral (ou bicúspide) está localizada entre o átrio esquerdo e o ventrículo esquerdo do coração humano.",
  },
  {
    question:
      "Qual das seguintes veias transporta sangue oxigenado para o átrio esquerdo do coração?",
    options: [
      "Veia cava inferior",
      "Veia pulmonar",
      "Veia femoral",
      "Veia subclávia",
    ],
    correctAnswer: "Veia pulmonar",
    explanation:
      "As veias pulmonares transportam sangue oxigenado dos pulmões para o átrio esquerdo do coração.",
  },
  {
    question:
      "Qual é a artéria responsável por transportar sangue desoxigenado do ventrículo direito para os pulmões?",
    options: [
      "Artéria aorta",
      "Artéria pulmonar",
      "Artéria carótida",
      "Artéria coronária",
    ],
    correctAnswer: "Artéria pulmonar",
    explanation:
      "A artéria pulmonar transporta sangue desoxigenado do ventrículo direito para os pulmões para oxigenação.",
  },
  {
    question:
      "Qual é a válvula localizada entre o átrio direito e o ventrículo direito?",
    options: [
      "Válvula tricúspide",
      "Válvula mitral",
      "Válvula aórtica",
      "Válvula pulmonar",
    ],
    correctAnswer: "Válvula tricúspide",
    explanation:
      "A válvula tricúspide está localizada entre o átrio direito e o ventrículo direito do coração humano.",
  },
  {
    question:
      "Qual das seguintes veias transporta sangue desoxigenado para o átrio direito do coração?",
    options: [
      "Veia cava superior",
      "Veia pulmonar",
      "Veia renal",
      "Veia femoral",
    ],
    correctAnswer: "Veia cava superior",
    explanation:
      "A veia cava superior transporta sangue desoxigenado dos membros superiores e da cabeça para o átrio direito do coração.",
  },

  {
    question: "Qual é a principal artéria que fornece sangue ao coração?",
    options: [
      "Artéria aorta",
      "Artéria pulmonar",
      "Artéria carótida",
      "Artéria coronária",
    ],
    correctAnswer: "Artéria coronária",
    explanation:
      "A artéria coronária direita e esquerda são as principais artérias coronárias que fornecem sangue ao próprio músculo cardíaco (miocárdio).",
  },
  {
    question: "Qual é a função das válvulas cardíacas no sistema circulatório?",
    options: [
      "Controlar o fluxo de sangue através do coração",
      "Produzir sangue",
      "Regular a temperatura do corpo",
      "Filtrar resíduos do sangue",
    ],
    correctAnswer: "Controlar o fluxo de sangue através do coração",
    explanation:
      "As válvulas cardíacas controlam o fluxo de sangue através do coração, garantindo que o sangue flua na direção correta e não retroceda.",
  },
  {
    question: "Qual é a função do septo interventricular no coração?",
    options: [
      "Separar o átrio direito do átrio esquerdo",
      "Separar o ventrículo direito do ventrículo esquerdo",
      "Conectar o coração ao cérebro",
      "Produzir células sanguíneas",
    ],
    correctAnswer: "Separar o ventrículo direito do ventrículo esquerdo",
    explanation:
      "O septo interventricular é a parede que separa o ventrículo direito do ventrículo esquerdo, mantendo o sangue oxigenado separado do sangue desoxigenado no coração.",
  },
  {
    question: "Quais são as válvulas semilunares encontradas no coração?",
    options: [
      "Válvula mitral e válvula tricúspide",
      "Válvula aórtica e válvula pulmonar",
      "Válvula tricúspide e válvula aórtica",
      "Válvula pulmonar e válvula mitral",
    ],
    correctAnswer: "Válvula aórtica e válvula pulmonar",
    explanation:
      "As válvulas semilunares são a válvula aórtica, que se abre a partir do ventrículo esquerdo para a artéria aorta, e a válvula pulmonar, que se abre a partir do ventrículo direito para a artéria pulmonar.",
  },
  {
    question: "Qual é a função principal do Nó Sinoatrial (SA) no coração?",
    options: [
      "Conduzir o sangue dos átrios para os ventrículos",
      "Gerar impulsos elétricos para iniciar os batimentos cardíacos",
      "Regular o fluxo sanguíneo nos pulmões",
      "Oxigenar o sangue que entra no coração",
    ],
    correctAnswer:
      "Gerar impulsos elétricos para iniciar os batimentos cardíacos",
    explanation:
      "O Nó Sinoatrial (SA) é conhecido como o 'marca-passo natural' do coração, gerando impulsos elétricos que iniciam cada batimento cardíaco.",
  },
  {
    question: "Onde está localizado o Nó Atrioventricular (AV) no coração?",
    options: [
      "Na parte superior do átrio direito",
      "Entre os átrios e os ventrículos",
      "No feixe de His",
      "Nas fibras de Purkinje",
    ],
    correctAnswer: "Entre os átrios e os ventrículos",
    explanation:
      "O Nó Atrioventricular (AV) está localizado entre os átrios e os ventrículos, retardando o impulso elétrico para permitir que os átrios esvaziem completamente o sangue nos ventrículos.",
  },
  {
    question:
      "Após passar pelo Nó Atrioventricular (AV), o impulso elétrico viaja por qual estrutura?",
    options: [
      "Feixe de His",
      "Fibras de Purkinje",
      "Átrios",
      "Artérias coronárias",
    ],
    correctAnswer: "Feixe de His",
    explanation:
      "Depois de passar pelo Nó Atrioventricular (AV), o impulso elétrico viaja pelo Feixe de His antes de se dividir nas fibras de Purkinje.",
  },
  {
    question: "Qual é a função das Fibras de Purkinje no coração?",
    options: [
      "Iniciar os batimentos cardíacos",
      "Conduzir impulsos elétricos pelos átrios",
      "Distribuir o impulso elétrico pelos ventrículos",
      "Regenerar células cardíacas",
    ],
    correctAnswer: "Distribuir o impulso elétrico pelos ventrículos",
    explanation:
      "As Fibras de Purkinje são responsáveis por distribuir o impulso elétrico pelos ventrículos, fazendo com que se contraiam e bombeiem sangue para fora do coração.",
  },
  {
    question:
      "Como os impulsos elétricos nos átrios contribuem para o funcionamento eficaz do coração?",
    options: [
      "Eles controlam a pressão arterial no corpo",
      "Eles garantem que os ventrículos se contraiam corretamente",
      "Eles empurram o sangue para os pulmões",
      "Eles permitem que os átrios se contraiam e transfiram sangue para os ventrículos",
    ],
    correctAnswer:
      "Eles permitem que os átrios se contraiam e transfiram sangue para os ventrículos",
    explanation:
      "Os impulsos elétricos nos átrios fazem com que eles se contraiam, impulsionando o sangue para os ventrículos do coração.",
  },
  {
    question:
      "Qual é o trajeto do sangue na pequena circulação (circulação pulmonar)?",
    options: [
      "Do ventrículo esquerdo para os pulmões através das artérias pulmonares, e retorna ao átrio esquerdo pelas veias pulmonares",
      "Do ventrículo direito para os pulmões através das artérias pulmonares, e retorna ao átrio esquerdo pelas veias pulmonares",
      "Do átrio esquerdo para os pulmões através das artérias pulmonares, e retorna ao ventrículo esquerdo pelas veias pulmonares",
      "Do átrio direito para os pulmões através das artérias pulmonares, e retorna ao ventrículo direito pelas veias pulmonares",
    ],
    correctAnswer:
      "Do ventrículo direito para os pulmões através das artérias pulmonares, e retorna ao átrio esquerdo pelas veias pulmonares",
    explanation:
      "Na pequena circulação, o sangue pobre em oxigênio sai do ventrículo direito, vai para os pulmões através das artérias pulmonares, onde recebe oxigênio, e retorna ao átrio esquerdo pelas veias pulmonares.",
  },
  {
    question:
      "Qual é o trajeto do sangue na grande circulação (circulação sistêmica)?",
    options: [
      "Do átrio esquerdo para todo o corpo através da aorta, e retorna ao ventrículo esquerdo pelas veias cavas",
      "Do ventrículo esquerdo para todo o corpo através da aorta, e retorna ao átrio direito pelas veias cavas",
      "Do átrio direito para todo o corpo através da aorta, e retorna ao ventrículo direito pelas veias cavas",
      "Do ventrículo direito para todo o corpo através da aorta, e retorna ao átrio direito pelas veias cavas",
    ],
    correctAnswer:
      "Do ventrículo esquerdo para todo o corpo através da aorta, e retorna ao átrio direito pelas veias cavas",
    explanation:
      "Na grande circulação, o sangue rico em oxigênio sai do ventrículo esquerdo, é distribuído por todo o corpo através da aorta e suas ramificações, e retorna ao átrio direito do coração através das veias cavas, agora pobre em oxigênio.",
  },
  {
    question:
      "Onde ocorre a troca de oxigênio e dióxido de carbono na pequena circulação?",
    options: [
      "Nos átrios",
      "Nas artérias pulmonares",
      "Alvéolos e vasos capilares nos pulmões",
      "Nos ventrículos",
    ],
    correctAnswer: "Alvéolos e vasos capilares nos pulmões",
    explanation:
      "A troca gasosa ocorre nos milhões de alvéolos nos pulmões e nos vasos capilares que os envolvem, durante a pequena circulação.",
  },
  {
    question:
      "Qual é o principal vaso sanguíneo envolvido na distribuição do sangue na grande circulação?",
    options: ["Artéria carótida", "Artéria pulmonar", "Veia cava", "Aorta"],
    correctAnswer: "Aorta",
    explanation:
      "A aorta é o principal vaso sanguíneo que distribui o sangue rico em oxigênio por todo o corpo na grande circulação.",
  },
  {
    question:
      "Por que o sangue retorna ao átrio direito através das veias cavas na grande circulação?",
    options: [
      "Para ser desoxigenado nos pulmões",
      "Para ser distribuído pelo corpo",
      "Para ser bombeado pelo ventrículo esquerdo",
      "Para ser reabastecido com nutrientes e oxigênio",
    ],
    correctAnswer: "Para ser reabastecido com nutrientes e oxigênio",
    explanation:
      "Na grande circulação, o sangue retorna ao átrio direito através das veias cavas para ser reabastecido com nutrientes e oxigênio.",
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
