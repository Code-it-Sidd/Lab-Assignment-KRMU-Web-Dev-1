
const quizQuestions = [
  {
    question: "Which language is used to style web pages?",
    answer: "css"
  },
  {
    question: "Which HTML tag is used to link an external CSS file? (example: <____ href='style.css'>)",
    answer: "link"
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    answer: "const"
  },
  {
    question: "Which method writes a message to the browser console?",
    answer: "console.log"
  },
  {
    question: "Which function converts a JSON string into a JavaScript object?",
    answer: "json.parse"
  }
];


function runQuiz() {
  let score = 0;

  alert(
    " Welcome to Dev Quizzer \n\n" +
    "Answer the questions .\n" 
    
  );

  
  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQ = quizQuestions[i];

    
    let userInput = prompt(
      "\n" +
      "Question " + (i + 1) + " of " + quizQuestions.length + ":\n" +
      currentQ.question +
      "\n"
    );

 
    if (userInput === null) {
      alert(" You skipped this question.");
      continue;
    }


    userInput = userInput.toLowerCase().trim();

   
    if (userInput === currentQ.answer) {
      score++;
      alert(" Correct!");
    } else {
      alert(
        " Incorrect.\n\n" +
        "Your answer: " + userInput + "\n" +
        "Correct answer: " + currentQ.answer
      );
    }
  }


  alert(
    " Quiz Finished!\n\n" +
    "Your Score: " + score + " / " + quizQuestions.length + "\n" +
    (score === quizQuestions.length
      ? "Good work! "
      : "Dont give up!")
  );
}


runQuiz();
