// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const containerQuestion = document.querySelector('#container-question');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Como é pago os tributos do DAS?',
    answers: [
      {
        answer: 'Cada tributos por Guia',
        correct: false,
      },
      {
        answer: 'Não paga tributos',
        correct: false,
      },
      {
        answer: 'Todos os tributos numa guia só',
        correct: true,
      },
      {
        answer: 'Paga somente uma vez no ano',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é ISS?',
    answers: [
      {
        answer: 'Imposto Sobre Serviços',
        correct: true,
      },
      {
        answer: 'Imposto Social de Serviços',
        correct: false,
      },
      {
        answer: 'Imposto Serviços Sociais',
        correct: false,
      },
      {
        answer: 'Imposto Social Semestral',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o valor da conta?',
    answers: [
      {
        answer: 'R$ 290,78',
        correct: false,
      },
      {
        answer: 'R$ 274,80',
        correct: false,
      },
      {
        answer: 'R$ 259,46',
        correct: true,
      },
      {
        answer: 'R$ 349,48',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é ICMS?',
    answers: [
      {
        answer: 'Imposto Círculo Mensal Social',
        correct: false,
      },
      {
        answer: 'Imposto Circular de Mercado Socialista',
        correct: false,
      },
      {
        answer: 'Imposto sobre a Circulação de Mercadorias e Serviços',
        correct: true,
      },
      {
        answer: 'Imposto Circular Mensal de Serviços',
        correct: false,
      },
    ],
  },
  {
    question: 'Quais são os impostos municipais?',
    answers: [
      {
        answer: 'IPI',
        correct: false,
      },
      {
        answer: 'ICMS',
        correct: false,
      },
      {
        answer: 'ISS',
        correct: true,
      },
      {
        answer: 'COFINS',
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
  containerQuestion.classList.toggle('hide');
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
