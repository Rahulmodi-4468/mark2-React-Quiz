const log = console.log;
const chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0; 
var userName ="";
var dotline = "----------------------------------------";
//Array of Objects
var arrayOfQuestions = [
  {
    question:" Who is Inventor of ReactJS?",
    option1:"a) Jordan Walke",
    option2:"b) Evan You",
    option3:"c) Ryan Dahl",
    answer:"a"
  },
  {
    question:" Which of the following is the correct name of React.js?",
    option1:"a) React-js",
    option2:"b) ReactJS",
    option3:"c) Both",
    answer:"b"
  },
  {
    question:" What of the following is used in React.js to increase performance? ",
    option1:"a) Original DOM",
    option2:"b) Virtual DOM",
    option3:"c) None of the above.",
    answer:"b"
  },
  {
    question:" Does React.js create a VIRTUAL DOM in the memory? ",
    option1:"a) True",
    option2:"b) False",
    option3:"c) cannot say",
    answer:"a"
  },
  {
    question:" What does ES6 stand for? ",
    option1:"a) ECMAScript 6",
    option2:"b) ECMA 6",
    option3:"c) ECMAJavaScript 6",
    answer:"a"
  }
];

function wellcome(){
  log(chalk.rgb(187, 242, 36)("-: Hey , wellcome to my React Quiz :- "));
  log(chalk.rgb(224, 72, 72)("\n"+dotline+"\n           ---INSTRUCTIONS---"));
  log(chalk.rgb(224, 72, 72)("1.For each Correct answer you got 1 Point.\n2.For each Wrong answer you lose 1 point.\n"+dotline));
  userName = readlineSync.question("\nMay I have your name? ");
  log(chalk.rgb(41, 242, 169)("Hey "+userName+" , We can start Quiz...\n")); 
}

function playGame(question,answer){
  //input of user
  var userAnswer = readlineSync.question("\nEnter your choice(a|b|c) : ");
  
    if(userAnswer.toLowerCase() === answer.toLowerCase()){
      log(chalk.rgb(41, 242, 169)("\nYou Absolutely Right!! You Got One Point"));
      score = score + 1;
    }
    else{
      log(chalk.red("Sorry , You are Wrong...\nYou loose Your One Point"));
      score = score - 1;
    }
  
  log("Current Scores : " + score + "\n");
  log(dotline);
}


function game(){ 
  for(var i=0;i<arrayOfQuestions.length;i++){
      var currQues = arrayOfQuestions[i];
      var op1 = currQues.option1;
      var op2 = currQues.option2;
      var op3 = currQues.option3;
      log("\n"+chalk.rgb(255, 192, 119)("Que.")+(currQues.question));
      log(op1+"\n"+op2+"\n"+op3);
      
      playGame(currQues.question,currQues.answer);

  }
}

function DisplayResult(){
  if(score == 5){
     log(chalk.rgb(41, 242, 169)("\n"+dotline+"\nYAY! "+userName+" You SCORED Full Points : "+score));
     log(chalk.rgb(242, 253, 0)("EXCELLENT"));
     log(chalk.rgb(41, 242, 169)(dotline));
  }
  else if(score == 3 || score == 4){
    log(chalk.rgb(41, 242, 169)("\n"+dotline+"\nYAY! "+userName+" You SCORED :  : "+score));
    log(chalk.rgb(255, 209, 0)("VERY GOOD"));
    log(chalk.rgb(41, 242, 169)(dotline));
  }
  else if( score == 2){
    log(chalk.rgb(41, 242, 169)("\n"+dotline+"\nYAY! "+userName+" You SCORED :  : "+score));
    log(chalk.rgb()("GOOD"));
    log(chalk.rgb(41, 242, 169)(dotline));
  }
  else{
    log(chalk.rgb(41, 242, 169)("\n"+dotline+"\nYAY! "+userName+" You SCORED :  : "+score));
    log(chalk.rgb(251, 26, 0)("You need to learn more about React"));
    log(chalk.rgb(41, 242, 169)(dotline));
  }
  
}

wellcome();
game();
DisplayResult();