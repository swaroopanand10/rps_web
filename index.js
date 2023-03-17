    let user = 0
    let comp = 0
function round(computerChoice, userChoice) {
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

function game() {

  for (let index = 0; index < 5; index++) {
    let choices = ['rock', 'paper', 'scissor']

    function getComputerChoice() {
      let choice = choices[Math.floor(Math.random() * choices.length)]
      return choice
    }

    let computerChoice = getComputerChoice()
    let userChoice = prompt('enter your choice').toLowerCase()
    console.log(`computer choice is ${computerChoice}`)
    console.log(`user choice is ${userChoice}`)

    if (choices.indexOf(userChoice)==-1) {
      throw new Error('please enter a valid choice')
    }

    console.log(`round ${index+1} results: `)
    round(computerChoice, userChoice)
      console.log('\n')
  }

    if (user > comp) {
    console.log(user)
    console.log(comp)
      console.log('user wins the game')
    } else if (user < comp) {
    console.log(user)
    console.log(comp)
      console.log('computer wins the game')

    } else {
    console.log(user)
    console.log(comp)
      console.log('game tied')
    }
}
game()
