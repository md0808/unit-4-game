//computer selects a random number as the magic number ---

//each of the 4 crystals is assigned a number between 1-12 ---

//when the crystals are clicked on, the number that is randomly assigned is added to the total number

//if the total number === random number, user wins.
    //User is congratulated,
    // wins ++
    //game restarts with new numbers

//if the total number > random number, user looses.
    //User is told they lost,
    // losses ++
    //game restarts with new numbers





//Global Variables===============================================================

//these variables will continue to accumulate with each round
var wins = 0;
var losses = 0;

var magicNumber = 0;

var userNumber = 0;

var crystal = {
    crystalOne :
        { value : 0},
    crystalTwo :
        { value : 0},
    crystalThree :
        { value : 0},
    crystalFour :
        { value : 0}   
};





//Functions===============================================================
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


function startGame (){
    //outcome div is cleared
    $("#outcome").text("");
    //resets the accumulative number back to zero at each round
    var userNumber = 0; 
    //sets the number to try to create to a number between 19- 120
    var magicNumber = getRandomNumber(19, 120);
    //number is given to #magic-number so that the user can see what they are trying to create
    $("#magic-number").html(magicNumber);

    
    // the values nested within the crystal object are given random values between 1 and 12 by being sent through the random number function
    crystal.crystalOne.value = getRandomNumber(1,12);
    crystal.crystalTwo.value = getRandomNumber(1,12);
    crystal.crystalThree.value = getRandomNumber(1,12);
    crystal.crystalFour.value = getRandomNumber(1,12);

    console.log("Magic number is: " + magicNumber);
    console.log(crystal.crystalOne.value);
    console.log(crystal.crystalTwo.value);
    console.log(crystal.crystalThree.value);
    console.log(crystal.crystalFour.value);
 
 }

 function determineOutcome () {
    if (userNumber > magicNumber) {
        losses++;
        $("#outcome").text("You lost! Try again.");
        console.log (losses + " sorry, you lost");
    }
    if (userNumber === magicNumber){
        wins++;
        $("#outcome").text("You win!");
        console.log (wins + "Hey, you win!");
    }
    else if (userNumber < magicNumber){
        $("#outcome").text("");
        }
   
   
 }
//  var addCrystals = function (){
//     $("#crystal-one").on("click", function(){
//         userNumber = userNumber +crystal.crystalOne.value;
//         console.log("your score =" + userNumber);
//         $("#accumulative-number").html(userNumber);
//     })
    
//     $("#crystal-two").on("click", function(){
//         userNumber = userNumber +crystal.crystalTwo.value;
//         console.log("your score =" + userNumber);
//         $("#accumulative-number").html(userNumber);
//     })
    
//     $("#crystal-three").on("click", function(){
//         userNumber = userNumber +crystal.crystalThree.value;
//         console.log("your score =" + userNumber);
//         $("#accumulative-number").html(userNumber);

//     })
    
//     $("#crystal-four").on("click", function(){
//         userNumber = userNumber + crystal.crystalFour.value;
//          console.log("your score =" + userNumber);
//          $("#accumulative-number").html(userNumber);

//     })
// }


//  function newRound (){
// // on click of any of the crystals, the outcome div changes

//  }



//Process and interactivity===============================================================


startGame();
// addCrystals ();

$("#crystal-one").on("click", function(){
    userNumber = userNumber +crystal.crystalOne.value;
    console.log("your score =" + userNumber);
    $("#accumulative-number").html(userNumber);
    determineOutcome();

})

$("#crystal-two").on("click", function(){
    userNumber = userNumber +crystal.crystalTwo.value;
    console.log("your score =" + userNumber);
    $("#accumulative-number").html(userNumber);
    determineOutcome();

})

$("#crystal-three").on("click", function(){
    userNumber = userNumber +crystal.crystalThree.value;
    console.log("your score =" + userNumber);
    $("#accumulative-number").html(userNumber);
    determineOutcome();

})

$("#crystal-four").on("click", function(){
    userNumber = userNumber + crystal.crystalFour.value;
     console.log("your score =" + userNumber);
     $("#accumulative-number").html(userNumber);
     determineOutcome();


})

$("#wins").html(wins);
$("#losses").html(losses);
