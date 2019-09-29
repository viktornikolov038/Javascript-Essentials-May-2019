function solve() {
  let quiz = document.getElementById("quizzie");
  let quizQuestions = quiz.getElementsByTagName("SECTION");

  let firstQuestion = quizQuestions[0];
  let secondQuestion = quizQuestions[1];
  let thirdQuestion = quizQuestions[2];

  let rightAnswersCount = 0;

  let firstQuestionAnswers = firstQuestion.getElementsByClassName("answer-text");
  let firstAnswer = firstQuestionAnswers[0];
  let secondAnswer = firstQuestionAnswers[1];

  function hideQuestion(question){
    question.style.display = "none";
  }

  function revealQuestion(question){
    question.style.display = "block";
  }

  function revealSecondQuestion(){
    hideQuestion(firstQuestion);
    revealQuestion(secondQuestion);
  }

  firstAnswer.addEventListener("click", function(){
    rightAnswersCount++;
    revealSecondQuestion();
  });

  secondAnswer.addEventListener("click", function(){
    revealSecondQuestion();
  });

  let secondQuestionAnswers = secondQuestion.getElementsByClassName("answer-text");
  let secondQuestionFirstAnswer = secondQuestionAnswers[0];
  let secondQuestionSecondAnswer = secondQuestionAnswers[1];

  function revealThirdQuestion(){
    hideQuestion(secondQuestion);
    revealQuestion(thirdQuestion);
  }
  
  secondQuestionFirstAnswer.addEventListener("click", function(){
    revealThirdQuestion();
  });

  secondQuestionSecondAnswer.addEventListener("click", function(){
    rightAnswersCount++;
    revealThirdQuestion();
  });

  let thirdQuestionAnswers = thirdQuestion.getElementsByClassName("answer-text");
  let thirdQuestionFirstAnswer = thirdQuestionAnswers[0];
  let thirdQuestionSecondAnswer = thirdQuestionAnswers[1];

  let resultUl = document.getElementById("results");
  let resultListItem = document.getElementsByClassName("results-inner")[0];
  let resultField = resultListItem.children[0];

  thirdQuestionFirstAnswer.addEventListener("click", function(){
    rightAnswersCount++;
    hideQuestion(thirdQuestion);
    
    if (rightAnswersCount === 3) {
      resultField.textContent = "You are recognized as top JavaScript fan!";
      
    } else{
      resultField.textContent = `You have ${rightAnswersCount} right answers`;
    }

    resultUl.style.display = "block";

  });

  thirdQuestionSecondAnswer.addEventListener("click", function(){
    hideQuestion(thirdQuestion);

    resultField.textContent = `You have ${rightAnswersCount} right answers`;
    resultUl.style.display = "block";
  });

}