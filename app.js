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

'use strict';

const STORE = {
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
      correctAnswerImage: 'https://lh3.googleusercontent.com/proxy/JEoFvCYl9V-bbrxdqaFhj8zVq6LTI743QgNPWlzHW5O-yYyxdvC6tbMS4bXz2VK4kC23gb0czxTAQ9fpA5jm3-pxRIVez5ps6wKRn3f_R9wVdnsXGDhoNmQxdgaQkBqOOgg_abKUL57kgut_3NRJYwHnG0DQnkezQZvmY-lg1WNTo6nf_uUV5RAfyPb07KooYrTYcGK_4p_SPGX3mI6E'
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
      correctAnswerImage: 'http://p.favim.com/orig/2018/11/25/luke-skywalker-badass-star-wars-Favim.com-6575843.gif'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  checkAnswer: '',
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function renderScore() {
  // Render the number of correct and incorrect numbers based on score in the STORE.
}

function updateScore() {
  // Update score in the STORE based on the compareAnswers function.
}

function renderQuestionNumber() {
  // Render the question number based on questionNumber in the STORE
}

function updateQuestionNumber() {
  // Listen for click event to update questionNumber in the STORE.
}

function updateCurrentCorrectAnswer() {
}

function updateCurrentAnswer() {
  // Change currentAnswer in the STORE.
}

function compareAnswers() {
  // Compare the Call either the renderCorrectPage function or the renderIncorrectPage.
  // Call the updateScore function.
}

function displayCorrectAnswer() {
}


// These functions supply the html for the pages ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function generateStartPage() {
  console.log('renderStartPage ran');
  return `
    <div class = 'start-page'>
      <section class = 'intro'>
        <h1>It's Movie Trivia Time!</h1>
        <h2>Are You Ready?</h2>
      </section>
      <button class = type="submit">Let's Go!</button>
    </div>`;
}

function generateCorrectPage() {
  return `
    <div class = 'check-answer' id = 'correct-page'>
      <h2>Correct!</h2>
      <img class = 'correct-image' src="img.jpg" alt="congratulatory-image">

      <section class = 'correct/incorrect'>
        <h3 class = 'correct'>Correct: #</h3>
        <h3 class = 'incorrect'>Incorrect: #</h3>
      </section>

      <button type="submit">Next Question Please!</button>
    </div>`;
}

function generateIncorrectPage() {
  return `
    <div class = 'check-answer' id = 'incorrect-page'>
      <h2>Incorrect!</h2>
      <img class = 'incorrect-image' src="img.jpg" alt="image-of-failure">

      <section class = correctAnswer>
        <p>You answered ______</p>
        <p>The correct answer was _______</p>
      </section>

      <section class = 'correct/incorrect'>
        <h3 class = 'correct'>Correct: #</h3>
        <h3 class = 'incorrect'>Incorrect: #</h3>
      </section>

      <input class = 'submit-button' type= 'submit' value= "Next Question Please!">
    </div>`;
}

function generateFinishPage() {
  return `
    <div class = 'finish-page'>
      <h2>You Finished!</h2>
      
      <section class = 'results'>
        <h3>Results:</h3>
        <h4 class = 'correct'>Correct: #</h4>
        <h4 class = 'incorrect'>Incorrect: #</h4>
      </section>

      <input class = 'submit-button' type= 'submit'
        value= "Let's Go Again!">
    </div>`;
}

function generateQuestionPage() {
  return `
    <div class = 'question-page'>
      <header class = question-status>
        <h2 class = 'question-number'>Question Number 1 Out Of 5</h2>
        <section class = 'correct/incorrect'>
          <h3 class = 'correct'>Correct: #</h3>
          <h3 class = 'incorrect'>Incorrect: #</h3>
        </section>
      </header>
      <p class = 'question'>Example Question</p>
      <form action="">

        <input type="radio" id="choice1" name="answer" value="choice1">
        <label for="choice1">Choice 1</label>

        <input type="radio" id="choice2" name="answer" value="choice2">
        <label for="choice2">Choice 2</label>

        <input type="radio" id="choice3" name="answer" value="choice3">
        <label for="choice3">Choice 3</label>

        <input type="radio" id="choice4" name="answer" value="choice4">
        <label for="choice4">Choice 4</label>
        

        <button type="submit">Check Answer</button>
      </form>
    </div>`;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This block defines the event handlers ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function handleStartButton() {
  $('.start-page').on('click', event => {
    event.preventDefault();
    console.log('handleStartButton ran');
    STORE.quizStarted = true;
    STORE.questionNumber ++;
    renderQuiz();
  });
}

function handleCheckAnswer() {
  $('.question-page').on('click', event => {
    event.preventDefault();
    console.log('handleCheckAnswer ran');
  });
}

function handleNextQuestion() {
  $('.check-answer').on('submit', event => {
    event.preventDefault();
    console.log('handleNextQuestion ran');
  });
}

function handleGoAgain() {
  $('.finish-page').on('submit', event => {
    event.preventDefault();
    console.log('handleGoAgain ran');
    STORE.quizStarted = false;
    STORE.questionNumber = 0;
    STORE.score = 0;
    renderQuiz();
  });
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This block renders the page and primes the event handlers --------------------------------------------------------------------------------------------------------------------------------------------------

function renderQuiz() {
  if (STORE.quizStarted === false) {
    $('body').html(generateStartPage());
    return;
  } else if (STORE.checkAnswer === 'correct') {
    $('body').html(generateCorrectPage());
    return;
  } else if (STORE.checkAnswer === 'incorrect') {
    $('body').html(generateIncorrectPage());
    return;
  } else if (STORE.questionNumber === STORE.questions.length) {
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
  console.log('handleQuizApp ran');
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(handleQuizApp);

function change() {
  STORE.quizStarted = true;
  console.log('change');
};

change();
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------