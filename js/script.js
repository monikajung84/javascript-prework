
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' Was clicked');
  const playerMove = argButtonName;
  console.log('player move is: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Draw number is: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('Computer move is: ' + computerMove);
  displayResult(playerMove, computerMove);


  function getMoveName(argMoveId) {
    console.log('the getMoveName function with the argument was called: ' + argMoveId);
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    } else {
      printMessage('I do not know move about id ' + argMoveId + '. I assume that it was about "rock".');
      return 'rock';
    }
  }
  printMessage('Your move: ' + playerMove);
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('the displayResults function with the argument was called: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('Win!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
        printMessage('Win!');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
        printMessage('Win!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Draw');
    } else {
      printMessage('Lose :(');
    }
    printMessage('I have chosen: ' + argComputerMove + ', and You have chosen: ' + argPlayerMove);
  }
}

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function() { buttonClicked('rock'); });
buttonPaper.addEventListener('click', function() { buttonClicked('paper'); });
buttonScissors.addEventListener('click', function() { buttonClicked('scissors'); });