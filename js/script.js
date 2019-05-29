const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");

function getComputerMove(){
  const moves = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() *3+1);
  return moves [randomNumber];
}

function win(){
  printMessage('Win!');
}
function lose(){
  printMessage('Lose!');
}
function draw(){
  printMessage('Draw!');
}

function game(playerMove){
  const computerMove = getComputerMove();
  console.log("ruch gracza " + playerMove);
  console.log("ruch compa " + computerMove);
  switch (playerMove + computerMove){
    case "paperrock":
    case "scissorsrock":
    case "scissorspaper":
      win();
      break;
    case "rockpaper":
    case "paperscissors":
    case "rockscissors":
      lose();
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      draw();
      break;
  }
}

function main(){
  buttonRock.addEventListener('click',function(){
    console.log("kliknąłeś kamien");
    game ("rock");
  })
  buttonPaper.addEventListener('click',function(){
    console.log("kliknąłeś papier");
    game ("paper");
  })
  buttonScissors.addEventListener('click',function(){
    console.log("kliknąłeś nożyce");
    game ("scissors");
  })
}

main();