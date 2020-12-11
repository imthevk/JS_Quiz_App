//  The form element (has the id `quiz-form`)
//  The answer inputs (have the class `answer`)
//  The questions (have the class `question-item`)
//  BONUS: The alert (has the id `alert`)
const formEl = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = document.querySelectorAll(".question-item");
const alertEl = document.querySelector("#alert");

console.log(questions.length);

// Create a submit event listener for the form that does the following.
formEl.addEventListener("submit", checkAnswers);

function checkAnswers(e) {
  e.preventDefault();

  //add the incorrect class and removing the correct class from all question items before checking the correct answers.
  answers.forEach((answer) => {
    const questionEl = answer.closest(".question-item");

    questionEl.classList.add("incorrect");
    questionEl.classList.remove("correct");
    // console.log(answer);
  });

  //Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  const checkedAnswers = answers.filter((answer) => answer.checked);
  console.log(checkedAnswers.length);

  //Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  checkedAnswers.forEach((answer) => {
    const questionEl = answer.closest(".question-item");
    // For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
    if (answer.value === "true") {
      questionEl.classList.add("correct");
      questionEl.classList.remove("incorrect");
    }
    //For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
    else {
      questionEl.classList.add("incorrect");
      questionEl.classList.remove("correct");
    }

    //If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
    const allTrue = checkedAnswers.every((answer) => answer.value === "true");
    const allAnswered = checkedAnswers.length === questions.length;
    if (allTrue && allAnswered) {
      alertEl.classList.add("active");
      setTimeout(() => {
        alertEl.classList.remove("active");
      }, 1000);
    }
  });
}
