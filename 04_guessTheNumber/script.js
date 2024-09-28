let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const lastGuess = document.querySelector('.guesses')
const lastRemaning = document.querySelector('.lastResult')
const loOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=> {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })  
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter a number more than 1")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        alert("WOOOHOOOO you Guessed it right 🎉🎉🎉🎉🎉")
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is TOOOO low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOO0 high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    lastGuess.innerHTML += `${guess} ,`
    numGuess++;
    lastRemaning.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    loOrhi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        lastGuess.innerHTML = ''
        lastRemaning.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}