//FUNCTIONS
//========================================================================================================================================================================

//function that begins the game. Called once the "Start Game" button is clicked=========> WORKING
var startGame = function (){
    //hide the intro text
    $("#welcomeText").hide();
    //hide the "Start Game" button
    $("#btn").hide();
    //display the first question
    displayQuestion();
}


//function that renders the questions and the multiple choice options to the page=============> WORKING
var displayQuestion = function() {
    console.log(questionCounter)
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
}

//function that renders the dialog text
var displayDialog = function() {
    //display the dialog text
    $("#dialog").html("<h2>"+dialogArr[dialogCounter].dialogText+"</h2>")
}

//functions to check which selection was made
var checkA = function() {
    if (questionCounter == 0) {
        renderCollectSpecimens()
    } else if (questionCounter == 1){
        renderRockAlpine()
    } else if (questionCounter == 2){
        renderWalkToRockAlpine()
    }else if (questionCounter == 3){
        renderWalkToPlains()
    }else if (questionCounter == 4){
        renderWalkToWoodland()
    }
}

var checkB = function() {
    if (questionCounter == 0) {
        renderProcessSpecimens()
    } else if (questionCounter == 1){
        renderPlains()
    } else if (questionCounter == 2){
        renderBoat()
    } else if (questionCounter == 3){
        renderDragonfly()
    } else if (questionCounter == 4){
        renderMouseSleigh()
    }
}

var checkC = function() {
    if (questionCounter == 0) {
        renderEnterData()
    } else if (questionCounter == 1){
        renderWoodland()
    } else if (questionCounter == 2){
        renderHerbarium()
    } else if (questionCounter == 3){
        renderHerbarium()
    } else if (questionCounter == 4){
        renderHerbarium()
    }
}

//functions to render the user's choice

var renderCollectSpecimens = function() {
    questionCounter = 1
    displayQuestion()
}

var renderProcessSpecimens = function() {
    console.log("Processing Specimens")
}

var renderEnterData = function() {
    console.log("Entering Data")
}


var renderRockAlpine = function() {
    questionCounter = 2
    displayQuestion()
}

var renderPlains = function() {
    console.log("plains")
    questionCounter = 3
    displayQuestion()
}

var renderWoodland = function() {
    questionCounter = 4
    displayQuestion()
}

var renderWalkToRockAlpine = function() {
    console.log("walk to rock alpine")
    $("#optionA").hide();
    $("#optionB").hide();
    $("#optionC").hide();
    $("#question").hide();
    displayDialog()
    bluejay()
}

function bluejay() {
    setTimeout(
        function() {
            dialogCounter = 1
            displayDialog()
            rockAlpine()
        }, 3000)
}

function rockAlpine() {
    setTimeout(
        function() {
            $("#dialog").hide();
            questionCounter = 6
            displayQuestion()
            $("#optionA").show();
            $("#optionB").show();
            $("#optionC").show();
            $("#question").show();
        }, 3000
    )
}

var renderWalkToPlains = function() {

}

var renderWalkToWoodland = function() {

}

var renderBoat = function() {

}

var renderDragonfly = function() {

}

var renderMouseSleigh = function() {

}

//GLOBAL VARIABLES
//========================================================================================================================================================================

//variable for which question is being displayed
var questionCounter = 0;

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
        questionText: "Which garden would you like to collect from today?",
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
            b: "By Boat",
            c: "Nevermind, too many specimens to identify as it is!"
        }
    },
    {
        questionText: "OK, let's pack up the gear and head out. How would you like to get to the Plains Garden",
        choices: {
            a: "Walk",
            b: "Hitch a Ride on a Dragonfly",
            c: "Nevermind, looks like it may rain"

        }
    },
    {
        questionText: "OK, let's pack up the gear and head out. How would you like to get to the Woodland Mosaic",
        choices: {
            a: "Walk",
            b: "Ride in the Mouse Sleigh",
            c: "Nevermind, better get back to entering data"

        }
    },
    {
        questionText: "OK, let's pack up the gear and head out. How would you like to get to the Woodland Mosaic",
        choices: {
            a: "Walk",
            b: "Ride in the Mouse Sleigh",
            c: "Nevermind, better get back to entering data"

        }
    },
    {
        questionText: "At last, you arrive at the Rock Alpine Garden. My what lush lovely forbes! What would you like to collect?",
        choices: {
            a: "Eritrichium aretioides",
            b: "Dodecatheon pulchellum",
            c: "Both"

        }
    }
]

//variable for which dialog is being displayed
var dialogCounter = 0;
//an array that stores the dialog
var dialogArr = [
    {
        dialogText: "You gather your collecting equipment and start on a nice walk to the Rock Alpine Garden"
    },
    {
        dialogText: "While walking, a bright blue jay swoops down onto the path. 'You should be careful out here', she warns. 'My fledglings are hunting for earthworms, and I would hate for them to mistake your hat for a tastey meal!'."
    }
]


//PAGE CONTENT/BUTTONS
//======================================================================================================================================================================

//variables for answer option buttons
var btnA = $("<button>");
var btnB = $("<button>");
var btnC = $("<button>");

//variable for nxt question button
var nxtBtn = $("<button>");

//varables for submit score page
var endLabel = $("<label>");
var lineBreak = $("<br>")
var endInput = $("<input>");
var submitScore = $("<button>");

//button that sends user to main page
var mainBtn = $("<button>");


//EVENT LISTENERS
//======================================================================================================================================================================
//call startQuiz when "Begin Quiz" button is clicked
$("#btn").on("click", startGame);

//evaluate user's selected answer when option "a" is clicked
$(btnA).on("click", function(event){
    checkA();
});
//evaluate user's selected answer when option "b" is clicked
$(btnB).on("click", function(event){
    checkB();
});
//evaluate user's selected answer when option "c" is clicked
$(btnC).on("click", function(event){
    checkC();
});

//To Do
//=======================================================================================================================================================================
