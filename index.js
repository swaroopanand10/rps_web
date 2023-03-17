let user = 0
let comp = 0

function round(computerChoice, userChoice) { //this function evaluates the winner for one round according to the values of human and computer
  if (computerChoice == userChoice) {
    console.log('tied')
    return
  }

  if (computerChoice == 'rock') {
    if (userChoice == 'paper') {
      console.log('user wins, paper beats rock')
      user++
    } else {
      console.log('computer wins, rock beats scissor')
      comp++
    }
  }

  if (computerChoice == 'paper') {
    if (userChoice == 'rock') {
      console.log('computer wins, paper beats rock')
      comp++
    } else {
      console.log(' user wins, scissor beats paper')
      user++
    }
  }
  if (computerChoice == 'scissor') {
    if (userChoice == 'paper') {
      console.log('computer wins, scissor beats paper')
      comp++
    } else {
      console.log('user wins, rock beats scissor')
      user++
    }
  }
}

function game() { // this the main function which holds 5 rounds 
  for (let index = 0; index < 5; index++) { // the loop will be executed 5 times and will do each thing 5 times for each round
    let choices = ['rock', 'paper', 'scissor']

    function getComputerChoice() { // randomly generating computer choice
      let choice = choices[Math.floor(Math.random() * choices.length)]
      return choice
    }

    let computerChoice = getComputerChoice()
    let userChoice = prompt('enter your choice').toLowerCase() // asking user for a choice

    console.log(`computer choice is ${computerChoice}`)
    console.log(`user choice is ${userChoice}`)

    if (choices.indexOf(userChoice) == -1) { // Throwing an error if user does not enter a valid choice
      throw new Error('please enter a valid choice')
    }

    console.log(`round ${index + 1} results: `) 
    round(computerChoice, userChoice) // Prinnting the results for each round
    console.log('\n')
  }

    // prinnting the number of times user and comp won in the whole game out of 5 rounds

    console.log(user) 
    console.log(comp)

  if (user > comp) {
    console.log('user wins the game')
  } else if (user < comp) {
    console.log('computer wins the game')
  } else {
    console.log('game tied')
  }
}
game()
