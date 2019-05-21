var computerMove;
var playerMove;
playerMove = 'papier';
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove + '! Wygrywam!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to:' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
  } else if (randomNumber == '2') {
    computerMove = 'papier';
  } else {
    computerMove = 'nożyce';
  }
  printMessage('Mój ruch: ' + computerMove);