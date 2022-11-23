// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Qual o valor da conta?',
    answers: [
      {
        answer: 'R$ 91,79',
        correct: true,
      },
      {
        answer: 'R$ 140,78',
        correct: false,
      },
      {
        answer: 'R$ 98,75',
        correct: false,
      },
      {
        answer: 'R$ 102,64',
        correct: false,
      },
    ],
  },
  {
    question: 'Quais são os impostos federais?',
    answers: [
      {
        answer: 'ICMS',
        correct: false,
      },
      {
        answer: 'ISS',
        correct: false,
      },
      {
        answer: 'PIS/COFINS/IPI/IRPF/IRPJ/CSLL',
        correct: true,
      },
      {
        answer: 'PIS/COFINS',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é uma nota fiscal?',
    answers: [
      {
        answer: 'Um documento de registro de compra e venda',
        correct: true,
      },
      {
        answer: 'Documento social',
        correct: false,
      },
      {
        answer: 'Documento paulista',
        correct: false,
      },
      {
        answer: 'Documento pessoal',
        correct: false,
      },
    ],
  },
  {
    question: 'Como emite guia do DAS?',
    answers: [
      {
        answer: 'Dentro do Site de Nota Fiscal',
        correct: false,
      },
      {
        answer: 'Pelo Simples Nacional',
        correct: true,
      },
      {
        answer: 'Dentro de qualquer site',
        correct: false,
      },
      {
        answer: 'Pelo word',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é planejamento tributário?',
    answers: [
      {
        answer: 'Planejar suas contas diárias',
        correct: false,
      },
      {
        answer: 'Planejar dívidas',
        correct: false,
      },
      {
        answer: 'Um conjunto de sistemas legais que visam diminuir o pagamento de tributos',
        correct: true,
      },
      {
        answer: 'Um conjunto de contas',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  //hideOrShowQuizz();
  //init();
  window.location.href = "./index.html"
});

// inicialização do quizz
init();