var button = document.querySelector(".btn");
var question = document.querySelector(".question");
var firstAnswer = document.getElementById("answer1");
var secondAnswer = document.getElementById("answer2");
var thirdAnswer = document.getElementById("answer3");
var fourthAnswer = document.getElementById("answer4");
var inputs = document.querySelectorAll("input");

var obj = {
    secondQuestion: {
        questionTwo: "Which of the following countries was first to use a symbol for zero?",
        answerFirst: "India",
        answerSecond: "Japan",
        answerThird: "China",
        answerFourth: "The United Kingdom"
    },
    thirdQuestion: {
        questionThree: "Who invented the World Wide Web?",
        answerOne: "Steve Jobs",
        answerTwo: "John Warnock",
        answerThree: "Susan Wojcicki",
        answerFour: "Tim Berners-Lee"
    }
}

var number = 0;
inputs.forEach(function(item){
    item.addEventListener("click", function(e){
        if(e.target.value === "answer2" && count == 0 && number == 0){
            number++;
            console.log(number);
        }
        if(e.target.value === "answer1" && count == 1 && (number == 0 || number == 1)){
            number++;
            console.log(number);
        }
        if(e.target.value === "answer4" && count == 2 && (number == 0 || number == 1 || number == 2)){
            number++;
            console.log(number);
        }
    });
});

var count = 0;
button.addEventListener("click", function(){
    count++;
    inputs.forEach(function(itemOther){
        itemOther.checked = false;
    });
    if(count == 1){
        question.innerHTML = obj.secondQuestion.questionTwo;
        firstAnswer.innerHTML = obj.secondQuestion.answerFirst;
        secondAnswer.innerHTML = obj.secondQuestion.answerSecond;
        thirdAnswer.innerHTML = obj.secondQuestion.answerThird;
        fourthAnswer.innerHTML = obj.secondQuestion.answerFourth;
    } 
    if(count == 2){
        question.innerHTML = obj.thirdQuestion.questionThree;
        firstAnswer.innerHTML = obj.thirdQuestion.answerOne;
        secondAnswer.innerHTML = obj.thirdQuestion.answerTwo;
        thirdAnswer.innerHTML = obj.thirdQuestion.answerThree;
        fourthAnswer.innerHTML = obj.thirdQuestion.answerFour;
        button.innerHTML = "Submit";
    }
    if(count == 3){
        question.innerHTML = `You answered ${number} question correct out of 3`;
        question.classList.add("result");
        document.getElementById("answers").remove();
        button.remove();
    }
});

