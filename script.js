// // Username input and global myOutputValue
var Username;
var myOutputValue;

// // Global win/lose counter

var userwinCount = 0;
var botwinCount = 0;

// // Random BOT Generator (Scissors Paper Stone)
// define BOT answer by combining arrary with RNG
var BOTFunc = function () {
  var RNG1 = Math.floor(Math.random() * 3);
  var BOTArray = ["Scissors", "Paper", "Stone"];
  var BOTRNG = BOTArray[RNG1];
  console.log("BOT threw");
  console.log(BOTRNG);
  return BOTRNG;
};

// // ScissorsPaperStone Game
// User prompted input for Username first and then for answer input.
// Filters blank user input.
var main = function (input) {
  if (Username == undefined && input.trim() == "") {
    myOutputValue = "Input Username to continue";
  } else if (Username == undefined && !(input.trim() == "")) {
    Username = input;
    myOutputValue = `Welome ${Username}. <br> Input "Scissors" or "Paper" or "Stone"`;
  } else if (!(Username == undefined) && !(input.trim() == "")) {
    game(Username, input);
  } else {
    myOutputValue = `No entry detected. ${Username}, please input "Scissors" or "Paper" or "Stone" `;
  }

  return myOutputValue;
};

// // Re-factoring the game into another function

var game = function (Username, input) {
  //computer bot plays scizzorpaperstone randomly
  var BOT = BOTFunc();

  // define user input (if all inputs fail) - input that is not Scissors/Paper/Stone
  myOutputValue = `${Username}, Please input "Scissors" or "Paper" or "Stone"`;

  console.log("User threw");
  console.log(input);

  // define win scenarios

  var win =
    (input == "Scissors" && BOT == "Paper") ||
    (input == "Paper" && BOT == "Stone") ||
    (input == "Stone" && BOT == "Scissors");

  // define  wrong input scenario - when user input something else.

  var wrong = !(input == "Scissors" || input == "Paper" || input == "Stone");

  // Gaming outcome
  if (win) {
    userwinCount = userwinCount + 1;
    myOutputValue = `Hello ${Username}. <br> You threw ${input}. <br> Bot threw ${BOT}. <br> You WIN! <br> You won ${userwinCount} times. Computer won ${botwinCount} times.`;
  } else if (wrong) {
    myOutputValue = `${Username}, Please input "Scissors" or "Paper" or "Stone"`;
  } else if (input == BOT) {
    myOutputValue = `Hello ${Username}. <br> You threw ${input}. <br> Bot threw ${BOT}. <br> It's a draw 
    <br> You won ${userwinCount} times. Computer won ${botwinCount} times.`;
  } else {
    botwinCount = botwinCount + 1;
    myOutputValue = `Hello ${Username}. <br> You threw ${input}. <br> Bot threw ${BOT}. <br> You LOSE! <br> You won ${userwinCount} times. Computer won ${botwinCount} times.`;
  }

  return myOutputValue;
};
