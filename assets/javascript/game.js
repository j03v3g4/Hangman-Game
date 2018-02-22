// Turn it on
window.onload = function () {
// Create an array of words
const words = ['blue', 'red', 'orange','grey', 'pink', 'peach', 'brown', 'cyan' ];

// Choose word randomly
let word = words[Math.floor(Math.random() * words.length)];
                            console.log(word);
let rGuess = [];
let wGuess = [];
let underScore = [];
var lives = 5;

// DOM HARD MODE
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// Create underscores based on length of word
let blank = () => {
    for(let i = 0; i < word.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
                            console.log(blank());

// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
                            console.log(keyword); 
    
// If guess is right
    if(word.indexOf(keyword) > -1) {
                            console.log(true);
    // Add to rGuess
        // docRightGuess[0].innerHTML = rightGuess.join(' ');
        rGuess.push(keyword);
                            console.log(rGuess);
    // Replace underscore
        // docUnderScore[0].innerHTML = underScore.join(' ');
        underScore[word.indexOf(keyword)] = keyword;
                            console.log(underScore);
        // Check if word matches guesses
            if(underScore.join('') == word) {
                alert('VICTORY!');
                // And choose new word
            }
    }
// If guess is wrong
    else {
    // Add to wGuess
        // docWrongGuess[0].innerHTML = wrongGuess.join(' ');
        wGuess.push(keyword);
                            console.log(wGuess);
        // And subtract 1 from lives
            // If lives reach zero alert('DEFEAT!')
            // and choose new word
    }
});
}
