let user = 0
let comp = 0
let count = 0

const rounds = document.querySelector('input')
const start = document.querySelector('.start')
const choiceMenu = document.querySelector('.choice-selection')
const choiceButtons = document.querySelectorAll('.choice-buttons')
const results = document.querySelector('.results')
choiceMenu.style.visibility = 'hidden'
start.addEventListener('click', showOptions)

function showOptions() {
  choiceMenu.style.visibility = ''
  results.textContent=''
}

let userChoice = ''

choiceButtons.forEach((btn) => btn.addEventListener('click', btnClicked))

function btnClicked(e) {
  userChoice = e.target.name
  count++
  game()
  if (rounds.value == count) {
    appendResultsh1('game ends; Final results')
    // NOW SHOWING THE FINAL REUSULTS
    // prinnting the number of times user and comp won in the whole game out of all rounds
    appendResults(`user won ${user} rounds`)

    appendResults(`computer won ${comp} rounds`)

    appendResults(`${rounds.value - user - comp} rounds are tied`)

    if (user > comp) {
      // printing the final reuslt accordint to the values of user and comp
      appendResults('user wins the  whole game')
    } else if (user < comp) {
      appendResults('computer wins the whole game')
    } else {
      appendResults('game tied')
    }
    choiceMenu.style.visibility = 'hidden'
    count=0;
    return
  }
}

function round(computerChoice, userChoice) {
  //this function evaluates the winner for one round according to the values of human and computer
  if (computerChoice == userChoice) {
    appendResults('tied')
    return
  }

  if (computerChoice == 'rock') {
    if (userChoice == 'paper') {
      appendResults('user wins, paper beats rock')
      user++
    } else {
      appendResults('computer wins, rock beats scissor')
      comp++
    }
  }

  if (computerChoice == 'paper') {
    if (userChoice == 'rock') {
      appendResults('computer wins, paper beats rock')
      comp++
    } else {
      appendResults(' user wins, scissor beats paper')
      user++
    }
  }

  if (computerChoice == 'scissor') {
    if (userChoice == 'paper') {
      appendResults('computer wins, scissor beats paper')
      comp++
    } else {
      appendResults('user wins, rock beats scissor')
      user++
    }
  }
}
function appendResults(a){
  let content = document.createElement('p');
  content.textContent=a
  results.appendChild(content)
}

function appendResultsh1(a){
  let content = document.createElement('h1');
  content.textContent=a
  results.appendChild(content)
}
function game() {
  // this the main function which holds 5 rounds
  // the loop will be executed 5 times and will do each thing 5 times for each round
  let choices = ['rock', 'paper', 'scissor']

  function getComputerChoice() {
    // randomly generating computer choice
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
  }

  let computerChoice = getComputerChoice()
  // let userChoice = prompt('enter your choice').toLowerCase() // asking user for a choice
  appendResultsh1(`Round ${count} Starts`)
  let a = `computer choice is ${computerChoice}`
  appendResults(a)
  a = `user choice is ${userChoice}`
  appendResults(a)

  if (choices.indexOf(userChoice) == -1) {
    // Throwing an error if user does not enter a valid choice
    throw new Error('please enter a valid choice')
  }

  appendResultsh1(`round ${count} results: `)
  round(computerChoice, userChoice) // Prinnting the results for each round

}
