// Create an array of words
const words = ['blue', 'red', 'orange','grey', 'pink', 'peach', 'brown', 'cyan' ];

// Choose word randomly
let word = words[Math.floor(Math.random() * words.length)];
                            console.log(word);
let rGuess = [];
let wGuess = [];
let underScore = [];

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
        docRightGuess.innerHTML = rightGuess.join(' ');
        rGuess.push(keyword);
                            console.log(rGuess);
    // Replace underscore
        docUnderScore.innerHTML = underScore.join(' ');
        underScore[word.indexOf(keyword)] = keyword;
                            console.log(underScore);
        // Check if word matches guesses
            if(underScore.join('') == word) {
                alert('VICTORY!');
            }
    }
// If guess is wrong
    else {
    // Add to wGuess
        docWrongGuess.innerHTML = wrongGuess.join(' ');
        wGuess.push(keyword);
                            console.log(wGuess);    
    }

});
