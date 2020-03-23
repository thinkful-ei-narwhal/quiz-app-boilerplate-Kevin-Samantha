'use strict';

let STORE = {
  questions: [
    {
      question: 'Who is the director of Lord of the Rings?',
      answers: [
        'Ron Howard',
        'Michael Bay',
        'Peter Jackson',
        'Martin Scorsese'
      ],
      correctAnswer: 'Peter Jackson',
      correctAnswerImage: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbrianrashid%2Ffiles%2F2016%2F09%2FPeter.jpg'
    },
    {
      question: 'In what movie did Val Kilmer play a character called Iceman?',
      answers: [
        'Willow',
        'Top Gun',
        'Batman Forever',
        'Wonderland'
      ],
      correctAnswer: 'Top Gun',
      correctAnswerImage: 'https://i0.wp.com/theaviationist.com/wp-content/uploads/2018/06/Top_Gun_2_40.jpg?fit=1024%2C799&ssl=1'
    },
    {
      question: 'At the end of Avengers: Endgame, what did Tony Stark say in response to Thanos’ line, “I am inevitable”?',
      answers: [
        '“No you’re not”',
        '“Nothing is inevitable”',
        '“Whatever”',
        '“I’m Iron Man”'
      ],
      correctAnswer: '“I’m Iron Man”',
      correctAnswerImage: 'https://i.ytimg.com/vi/_anDMGmck-k/maxresdefault.jpg'
    },
    {
      question: 'In 2019, Parasite made Oscar history for being the first foreign language film to ever win the award for Best Picture. What language was it produced in?',
      answers: [
        'French',
        'Chinese',
        'Korean',
        'Spanish'
      ],
      correctAnswer: 'Korean',
      correctAnswerImage: 'https://assets.mubicdn.net/images/notebook/post_images/29833/images-w1400.jpg?1579571205'
    },
    {
      question: 'In Star Wars, to whom did Luke Skywalker\'s first lightsaber originally belong?',
      answers: [
        'Darth Vader',
        'Obi-Wan Kenobi',
        'Yoda',
        'Mace Windu'
      ],
      correctAnswer: 'Darth Vader',
      correctAnswerImage: 'https://i.stack.imgur.com/1O3ba.jpg'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  correct: 0,
  incorrect: 0,
  chosenAnswer: '',
  checkAnswer: '',
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//This section defines functions called by the HTML generator functions ----------------------------------------------------------------------------------------------------------------------------------------

function generateQuestions(answerChoices) {
  let choices = answerChoices.map(answerOption => `<div class = "choices"><input type="radio" id="${answerOption}" name="answer" value="${answerOption}">
  <label for="${answerOption}">${answerOption}</label></div>`);
  return choices.join(' ');
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This section defines functions that supply the html for the pages -------------------------------------------------------------------------------------------------------------------------------------------

function generateStartPage() {
  console.log('renderStartPage ran');
  return `
    <div class = 'start-page'>
      <section class = 'intro'>
        <h1>It's Movie Trivia Time!</h1>
        <h2>Are You Ready?</h2>
      </section>
      <button class = "start" type="button">Let's Go!</button>
    </div>`;
}

function generateCorrectPage() {
  return `
    <div class = 'check-answer' id = 'correct-page'>
      <h2>Correct!</h2>
      <img class = 'correct-image' src="${STORE.questions[STORE.questionNumber - 1].correctAnswerImage}" alt="congratulatory-image">

      <section class = 'correct-incorrect'>
        <h3 class = 'correct'>Correct: ${STORE.correct}</h3>
        <h3 class = 'incorrect'>Incorrect: ${STORE.incorrect}</h3>
      </section>

      <button class = "next-question" type="button">Next Question Please!</button>
    </div>`;
}

function generateIncorrectPage() {
  return `
    <div class = 'check-answer' id = 'incorrect-page'>
      <h2>Incorrect!</h2>
      <img class = 'incorrect-image' src="${STORE.questions[STORE.questionNumber - 1].correctAnswerImage}" alt="image-of-failure">

      <section class = correctAnswer>
        <p>You answered: ${STORE.chosenAnswer}</p>
        <p>The correct answer was: ${STORE.questions[STORE.questionNumber - 1].correctAnswer}</p>
      </section>

      <section class = 'correct-incorrect'>
        <h3 class = 'correct'>Correct: ${STORE.correct}</h3>
        <h3 class = 'incorrect'>Incorrect: ${STORE.incorrect}</h3>
      </section>

      <button class = "next-question" type="button">Next Question Please!</button>
    </div>`;
}

function generateFinishPage() {
  return `
    <div class = 'finish-page'>
      <h1>You Finished!</h1>
      
      <section class = 'results'>
        <h3>Results:</h3>
        <h4 class = 'correct'>Correct: ${STORE.correct}</h4>
        <h4 class = 'incorrect'>Incorrect: ${STORE.incorrect}</h4>
      </section>

      <button class = "restart" type="button">Let's Go Again!</button>
    </div>`;
}

function generateQuestionPage() {
  return `
    <div class = 'question-page'>
      <header class = question-status>
        <h2 class = 'question-number'>Question ${STORE.questionNumber} / ${STORE.questions.length}</h2>
        <section class = 'correct-incorrect'>
          <h3 class = 'correct'>Correct: ${STORE.correct}</h3>
          <h3 class = 'incorrect'>Incorrect: ${STORE.incorrect}</h3>
        </section>
      </header>
      <p class = 'question'>${STORE.questions[STORE.questionNumber - 1].question}</p>
      
      <form class = "questions" action="">
        <section class = 'answer-options'>
          ${generateQuestions(STORE.questions[STORE.questionNumber -1].answers)}
        </section>

        <button class ="submit-answer" type="submit">Check Answer</button>
      </form>
    </div>`;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This section defines miscellaneous functions called in the event listeners -----------------------------------------------------------------------------------------------------------------------------------

function compareAnswers() {
  if (STORE.chosenAnswer === STORE.questions[STORE.questionNumber - 1].correctAnswer) {
    STORE.checkAnswer = 'correct';
  } else {
    STORE.checkAnswer = 'incorrect';
  }
  return STORE.checkAnswer;
}

function updateScore(correctIncorrect) {
  if (correctIncorrect === 'correct') {
    STORE.correct ++;
  } else {
    STORE.incorrect ++;
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This section defines the event handlers ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function handleStartButton() {
  $('body').on('click', '.start', event => {
    event.preventDefault();
    STORE.quizStarted = true;
    STORE.questionNumber ++;
    renderQuiz();
  });
}

function handleCheckAnswer() {
  $('body').on('submit', event => {
    event.preventDefault();
    STORE.chosenAnswer = $('input[name="answer"]:checked').val();
    updateScore(compareAnswers());
    renderQuiz();
  });
}

function handleNextQuestion() {
  $('body').on('click', '.next-question', event => {
    event.preventDefault();
    STORE.questionNumber ++;
    STORE.chosenAnswer = '';
    STORE.checkAnswer = '';
    console.log('handleNextQuestion ran');
    renderQuiz();
  });
}

function handleGoAgain() {
  $('body').on('click', '.restart', event => {
    event.preventDefault();
    console.log('handleGoAgain ran');
    STORE.quizStarted = false;
    STORE.questionNumber = 0;
    STORE.score = 0;
    STORE.incorrect = 0;
    STORE.correct = 0;
    renderQuiz();
  });
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This section renders the page and primes the event handlers --------------------------------------------------------------------------------------------------------------------------------------------------

function renderQuiz() {
  console.log(STORE);
  if (STORE.quizStarted === false) {
    $('body').html(generateStartPage());
    return;
  } else if (STORE.checkAnswer === 'correct') {
    $('body').html(generateCorrectPage());
    return;
  } else if (STORE.checkAnswer === 'incorrect') {
    $('body').html(generateIncorrectPage());
    return;
  } else if (STORE.questionNumber > STORE.questions.length) {
    $('body').html(generateFinishPage());
    return;
  } else {
    $('body').html(generateQuestionPage());
    return;
  }
}

function handleQuizApp() {
  renderQuiz();
  handleStartButton();
  handleCheckAnswer();
  handleNextQuestion();
  handleGoAgain();
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(handleQuizApp);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)