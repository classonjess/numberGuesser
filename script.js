let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= () => {
  return Math.random() * 9 | 0;
}

const compareGuesses = (human, computer, target) =>{
 let com = Math.abs(target - computer);
 let hum = Math.abs(target - human);
  if ( hum  <= com ){
    return true;
  } else if (hum => com){
    return false;
  } else{
    return true;
  }
};

console.log(compareGuesses());
generateTarget();

const updateScore = (winner) => {
  if ( winner === "human"){
    humanScore += 1;
  } else if (winner === "computer"){
    computerScore += 1;
  } else {
    return "ERROR";
  }
};

const advanceRound = () => {
  return currentRoundNumber += 1;
}