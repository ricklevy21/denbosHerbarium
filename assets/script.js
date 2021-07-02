//FUNCTIONS
//========================================================================================================================================================================
//function that begins the game. Called once the "Begin" button is clicked=========> WORKING
var startGame = function (){
    //hide the intro text
    $("#welcomeText").hide();
    //hide the "Begin" button
    $("#btn").hide();
    //show the "Next Question" button
    nxtBtn.show();
    //display the first question
    displayQuestion();
}


//function that renders the questions and the multiple choice options to the page=============> WORKING
var displayQuestion = function() {
        //renders the nxtBtn as "Continue"
        nxtBtn.text("Continue");
        nxtBtn.attr("class", "btn btn-dark");
        $("#nxtBtn").append(nxtBtn);
        disableNxtBtn()
        //display the question text
        $("#question").html("<h1>"+questionsArr[questionCounter].questionText+"</h1>")
        //display the multiple choice answers
        btnA.text(questionsArr[questionCounter].choices.a);
        btnA.attr("value", questionsArr[questionCounter].choices.a);
        btnA.attr("class", "btn btn-primary");
        $("#optionA").append(btnA);
        
        btnB.text(questionsArr[questionCounter].choices.b);
        btnB.attr("value", questionsArr[questionCounter].choices.b);
        btnB.attr("class", "btn btn-primary");
        $("#optionB").append(btnB);
        
        btnC.text(questionsArr[questionCounter].choices.c);
        btnC.attr("value", questionsArr[questionCounter].choices.c);
        btnC.attr("class", "btn btn-primary");
        $("#optionC").append(btnC);
        
        btnD.text(questionsArr[questionCounter].choices.d);
        btnD.attr("value", questionsArr[questionCounter].choices.d);
        btnD.attr("class", "btn btn-primary");
        $("#optionD").append(btnD);
}

//function that evaluates if a user's answer is correct or incorrect====================================>WORKING
var corrIncorr = function() {
    //correct answer adds 1 point to the user's score
    if (event.target.value === questionsArr[questionCounter].correctChoice) {
        score = score +1
    //incorrect answer reduces time left by 10 seconds
    } else {
        counter = counter -10;
    }
    //change button colors to reveal correct/incorrect answers
    btnColor();
}

//function that changes colors of buttons after answer is selected=======================================>WORKING
var btnColor = function(){
     if (btnA.val() === questionsArr[questionCounter].correctChoice) {
        btnA.removeClass("btn btn-primary");
        btnA.addClass("btn btn-success");
     } else {
        btnA.removeClass("btn btn-primary");
        btnA.addClass("btn btn-danger");
     }
     if (btnB.val() === questionsArr[questionCounter].correctChoice) {
        btnB.removeClass("btn btn-primary");
        btnB.addClass("btn btn-success");
     } else {
        btnB.removeClass("btn btn-primary");
        btnB.addClass("btn btn-danger");
     }
     if (btnC.val() === questionsArr[questionCounter].correctChoice) {
        btnC.removeClass("btn btn-primary");
        btnC.addClass("btn btn-success");
     } else {
        btnC.removeClass("btn btn-primary");
        btnC.addClass("btn btn-danger");
     }
     if (btnD.val() === questionsArr[questionCounter].correctChoice) {
        btnD.removeClass("btn btn-primary");
        btnD.addClass("btn btn-success");
     } else {
        btnD.removeClass("btn btn-primary");
        btnD.addClass("btn btn-danger");
     }
}


//functions that take action once an answer button is clicked
var checkA = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

var checkB = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

var checkC = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

var checkD = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

//function that disables answer buttons once an answer has been selected==================================> WORKING
var disableBtns = function() {
    btnA.prop("disabled",true);
    btnB.prop("disabled",true);
    btnC.prop("disabled",true);
    btnD.prop("disabled",true);
}

//function that enables answer buttons once user goes to next question==================================> WORKING
var enableBtns = function() {
    btnA.prop("disabled",false);
    btnB.prop("disabled",false);
    btnC.prop("disabled",false);
    btnD.prop("disabled",false);
}

//function that disables the next question button
var disableNxtBtn = function() {
    nxtBtn.prop("disabled",true);
}

//function that enables the next question button
var enableNxtBtn = function() {
    nxtBtn.prop("disabled",false);
}

//function that displays the score as the quiz is ongoing
var ongoingScore = function() {
    $("#score").html("<h4>Current Score "+score+"</h4>")
};

//function that ends the game and shows your score. called when all questions are answered or time left = 0.==================================> WORKING
//allows user to enter 3 initials and save score to local storage...high scores are on another html page
var endQuiz = function() {
    //calculate final score- takes into account time left and correct answers given
    //avoid negative score due to incorrect questions reducing time below zero
    if (counter < 0){
        counter = 0
    } else{
        counter = counter
    }
    score = score + counter;
    //hide all current elements
    nxtBtn.hide();
    $("#text").hide();
    $("#score").hide();
    $("#timer").hide();
    $("#question").hide();
    $("#optionA").hide();
    $("#optionB").hide();
    $("#optionC").hide();
    $("#optionD").hide();
    //show information in end of quiz element
    $("#end").show();
    $("#end").append("<h3> FINAL SCORE: "+score+"</h3>");
    $("#end").append(endLabel);
    $("#end").append(lineBreak);
    $("#end").append(endInput);
    $("#submitBtn").append(submitScore);
    endLabel.text("ENTER YOUR INITIALS HERE:")
    endLabel.attr("for", "initials")
    endInput.attr("id", "initials")
    endInput.attr("type", "text")
    endInput.attr("maxLength", "3")
    submitScore.text("Submit")
    submitScore.attr("class", "btn btn-dark")
}


//get high scores from local storage and put them in an array called highScores=====================================> WORKING
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


//function that saves score to local storage=====================================> WORKING
var saveScore = function(){
    event.preventDefault();
    //assign user's text input into initials variable
    initials = document.getElementById("initials").value
    //create object the new score will go into
    var newScoreObj = {
        "score": score,
        "name": initials
    }
    //add newScoreObject to highScores array
    highScores.push(newScoreObj)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    goToScoresPage();
}

//function that brings user to the home page=====================================> WORKING
var goToHomePage = function(){
    window.location.assign("../index.html")
}

//function that brings user to the high scores page===============================> WORKING
var goToScoresPage = function(){
     window.location.assign("./assets/scores.html");
}

//function that renders the high scores page=======================================> WORKING
var highScoresPage = function(){
    mainBtn.text("Back to Main Page");
    mainBtn.attr("class", "btn btn-dark");
    $("#homeBtn").append(mainBtn);
    getScoresFromLocal();
    printHighScores();
    animateBackground();
}

//function that gets high scores from local storage===================================> WORKING
var getScoresFromLocal = function(){
    scoresFromLocal = localStorage.getItem("highScores");
    scoresFromLocal = JSON.parse(scoresFromLocal);
    //sort scores from high to low
if (scoresFromLocal !== null){
            scoresFromLocal.sort(function(a,b){return b.score-a.score});
    }
}

//function that prints highscores to the page========================================> WORKING
var printHighScores = function(){
    if (scoresFromLocal !== null){
    for (var i = 0; i < scoresFromLocal.length; i++){
        $("#highScoresList").append("<h4>"+scoresFromLocal[i].name +": "+ scoresFromLocal[i].score+"</h4>")
        }
    }
};

//function that animates background color on high scores page
var animateBackground = function(){
    var i = 0;
    function change() {
        var doc = document.getElementById("mushroom");
        var color = ["violet", "indigo", "blue", "green","yellow","orange","red"];
        doc.style.borderColor = color[i];
        i = (i + 1) % color.length;
        var doc = document.getElementById("background");
        var color = ["red", "orange", "yellow", "green","blue","indigo","violet"];
        doc.style.backgroundColor = color[i];
        i = (i + 1) % color.length;
        var doc = document.getElementById("highScoresList");
        var color = ["violet", "indigo", "blue", "green","yellow","orange","red"];
        doc.style.color = color[i];
        i = (i + 1) % color.length;
    }
    setInterval(change, 80);
}

//GLOBAL VARIABLES
//========================================================================================================================================================================

//variable for which question is being displayed
var questionCounter = 0;

//variable for the user's score
var score = 0;

var initials = "";

//an array of objects that store question information
var questionsArr = [
    {
        questionText: "What would you like to work on?",
        choices: {
            a: "Collect Vouchers",
            b: "Process Specimens",
            c: "Enter Data"
        }
    },
    {
        questionText: "Which garden would you like to collect from to today?",
        choices: {
            a: "The Rock Alpine Garden",
            b: "The Plains Garden",
            c: "Woodland Mosaic"
        }
    },
    {
        questionText: "OK, let's pack up the gear and head out. How would you like to get to the Rock Alpine Garden",
        choices: {
            a: "Walk",
            b: "By Boat"
        }
    },
    {
        questionText: "OK, let's pack up the gear and head out. How would you like to get to the Plains Garden",
        choices: {
            a: "Walk",
            b: "Hitch a Ride on a Dragonfly"
        }
    },
    {
        questionText: "OK, let's pack up the gear and head out. How would you like to get to the Woodland Mosaic",
        choices: {
            a: "Walk",
            b: "Ride in the Mouse Sleigh"
        }
    }
]

//PAGE CONTENT/BUTTONS
//======================================================================================================================================================================

//variables for answer option buttons
var btnA = $("<button>");
var btnB = $("<button>");
var btnC = $("<button>");
var btnD = $("<button>");

//variable for nxt question button
var nxtBtn = $("<button>");

//varables for submit score page
var endLabel = $("<label>");
var lineBreak = $("<br>")
var endInput = $("<input>");
var submitScore = $("<button>");

//button that sends user to main page
var mainBtn = $("<button>");

//hide the end page text
$("#end").hide();
nxtBtn.hide();

//render the high scores page
highScoresPage();


//EVENT LISTENERS
//======================================================================================================================================================================
//call startQuiz when "Begin Quiz" button is clicked
$("#btn").on("click", startGame);
//call goToScoresPage when "High Scores Button" is clicked
$("#highScores").on("click", goToScoresPage);
//call the nextQuestion function when the "Next Question" button is clicked
nxtBtn.on("click", nextQuestion);
//submit user's final score to local storage
submitScore.on("click", saveScore);
//return user to main page
mainBtn.on("click", goToHomePage);

//evaluate user's selected answer when option "a" is clicked
$(btnA).on("click", function(event){
    enableNxtBtn();
    checkA();
});

//evaluate user's selected answer when option "a" is clicked
$(btnB).on("click", function(event){
    enableNxtBtn();
    checkB();
})

//evaluate user's selected answer when option "a" is clicked
$(btnC).on("click", function(event){
    enableNxtBtn();
    checkC();
})

//evaluate user's selected answer when option "a" is clicked
$(btnD).on("click", function(event){
    enableNxtBtn();
    checkD();
})

//To Do
//=======================================================================================================================================================================
/*
optional: make it so you must enter initials OR add a main page button at end of quiz--not enough time to fiuure out the validation for this
I cant seem to figure out a way to only render the high scores page once a lin to that page has been clicked- causing error in console on main page due to animation. Not really a problem...but not perfection
*/