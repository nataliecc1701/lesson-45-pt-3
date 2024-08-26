function guessingGame() {
    const secret = Math.floor(Math.random()*100);
    let gameWon = false;
    let guesses = 0;
    
    return function(guess) {
        if (gameWon) {
            return "The game is over, you already won!"
        }
        
        guesses++;
        if (guess === secret) {
            gameWon = true;
            return `You win! You found ${secret} in ${guesses} guesses.`
        }
        if (guess < secret) {
            return `${guess} is too low!`
        }
        return `${guess} is too high!`
    }
}

module.exports = { guessingGame };
