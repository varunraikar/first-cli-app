const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question(chalk.blue.bold('What is your name? '));

console.log(chalk.green('Welcome ') + chalk.blue.underline.bold(userName) + "!" +chalk.red.bgYellowBright.bold(' DO YOU KNOW VARUN?'));
console.log(chalk.magentaBright.bold("This Quiz will test how well do you know Varun."));
console.log(chalk.cyan.bold("Let's Start"));
console.log("-----------");

// high score data 
var highScores = [
  {
    name: "Varun",
    score: 10,
  }
]
 
function play (question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("You are correct!"));
    score = score + 1;
    console.log(chalk.magentaBright.bold("Current Score is ") + chalk.magenta.bold(score));
  } 
  else 
  {
    console.log(chalk.red("You are Wrong!"));
    console.log(chalk.magentaBright.bold("Current Score is ") + chalk.magentaBright.bold(score));
  }
  console.log("------------------")
}

var listQnA = [
{
  question: chalk.yellowBright("1. Where does Varun Live?"),
  answer: "Hubli"
}
,
{
  question: chalk.yellowBright("2. Which is his favorite beverage?"),
  answer: "Tea"
}
,
{
  question: chalk.yellowBright("3. Does Varun like to go to Gym everyday?"),
  answer: "Yes"
}
,
{
  question: chalk.yellowBright("4. What is his First Dog name?"),
  answer: "Rocky"
}
,
{
  question: chalk.yellowBright("5. What is his phone brand?"),
  answer: "OnePlus"
} 
,
{
  question: chalk.yellowBright("6. What is his Instagram username?"),
  answer: "vr7.tech"
}
,
{
  question: chalk.yellowBright("7. Which vehicle does he have?"),
  answer: "Jupiter"
}
,
{
  question: chalk.yellowBright("8. What is his PC name?"),
  answer: "Red Mercury"
}
,
{
  question: chalk.yellowBright("9. Does Varun has website?"),
  answer: "Yes"
}
,
{
  question: chalk.yellowBright("10. What is his second dog name?"),
  answer: "Lucky"
}];

for (var i=0 ; i<listQnA.length ; i++){
  var currentQuestion = listQnA[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YOUR SCORE IS "+ score);
if (score === 10) {
  console.log("You have scored the highest!")
}
console.log("---------------------");
console.log("LEADER BOARD");
console.log("---------------------");

for (j=0; j<highScores.length ; j++){
  var currentListName = highScores[j];
  console.log(currentListName.name)
  console.log(currentListName.score)
  console.log("---------------------");
}