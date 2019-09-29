//global variables==========================


var wins = 0;
var losses = 0;

// the number that the user is trying to achieve. 27 is just for text purposes, but is later randomly generated.
var magicNumber = 27;
// the number that the user currently has
var userNumber = 0;

var crystal = {
    purple :
        { value : 0},
    peach :
        { value : 0},
    green :
        { value : 0},
    red :
        { value : 0}   
};


//functions=============================================



function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

setTimeout(resetText, 3000);
function resetText() {
    $("#outcome").text("");
    console.log("3 seconds")
}

function startGame(){
    resetText();
     userNumber =        0;
     magicNumber =       getRandomNumber(19,120);
    //magic number is not changing the global variable.
    crystal.purple.value =  getRandomNumber(1,12);
    crystal.peach.value =   getRandomNumber(1,12);
    crystal.green.value =   getRandomNumber(1,12);
    crystal.red.value =     getRandomNumber(1,12);

    //testing -----------------------------------
    console.log("--------------");
    console.log("Magic Number is: " + magicNumber);
    console.log("Purple " + crystal.purple.value);
    console.log("Peach " + crystal.peach.value);
    console.log("green "  + crystal.green.value);
    console.log("--------------");

    $("#magic-number").html(magicNumber);
    $("#accumlative-number").html(userNumber);

 

}

function addCrystals(crystal){
    //updates current score
    userNumber= userNumber + crystal.value;
    
    //changes interface
    $("#accumulative-number").html(userNumber)
    //calls the function that looks at the wins and losses
    determineOutcome();

    console.log("Your score is " + userNumber + " and magic number is: " + magicNumber);
    
}


// !!This is not working yet. Its taking the original value assigned to magicNumber rather than the value generated through getRandomNumber
function determineOutcome () {
    if (userNumber > magicNumber) {
        losses++;
        $("#outcome").text("You lost! Try again.");
        console.log (losses + " sorry, you lost");
        $("#losses").html(losses);
        startGame();
    
    }
    else if (userNumber == magicNumber){
        wins++;
        $("#outcome").text("You win!");
        console.log (wins + "Hey, you win!");
        $("#wins").html(wins)
        startGame();
    }
}

//main process====================================

startGame();


$("#purple").click(function(){
    console.log("purple");
    addCrystals(crystal.purple)
})

$("#peach").click(function(){
    console.log("peach");
    addCrystals(crystal.peach)
})

$("#green").click(function(){
    console.log("green");
    addCrystals(crystal.green)
})

$("#red").click(function(){
    console.log("red");
    addCrystals(crystal.red)

})
