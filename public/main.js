const main = () => {}
const updateTeamName = (teamInput, teamName) => {
  const updateName = document.querySelector(teamInput).value
  document.querySelector(teamName).textContent = updateName
}
const updateTeamOne = () => {
  updateTeamName('.team-1-input', '.team-1-name')
}

const updateTeamTwo = () => {
  updateTeamName('.team-2-input', '.team-2-name')
}

const addTeamScore = teamScore => {
  if (document.querySelector(teamScore).textContent < 21) {
    const currentScore = document.querySelector(teamScore).textContent
    const addOne = parseInt(currentScore) + 1
    document.querySelector(teamScore).textContent = addOne
  }
  winState()
}
const addTeamOneScore = () => {
  addTeamScore('.team-1-score')
}

const addTeamTwoScore = () => {
  addTeamScore('.team-2-score')
}

const subTeamScore = teamScore => {
  if (document.querySelector(teamScore).textContent > 0) {
    const currentScore = document.querySelector(teamScore).textContent
    const addOne = parseInt(currentScore) - 1
    document.querySelector(teamScore).textContent = addOne
  }
}

const subTeamOneScore = () => {
  subTeamScore('.team-1-score')
}

const subTeamTwoScore = () => {
  subTeamScore('.team-2-score')
}
const winState = () => {
  if (
    document.querySelector('.team-1-score').textContent === '21' ||
    document.querySelector('.team-2-score').textContent === '21'
  ) {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    if (document.querySelector('.team-1-score').textContent === '21') {
      document.querySelector('.winner').textContent =
        document.querySelector('.team-1-name').textContent + ' wins!'
      teamOneWins()
      teamTwoLoses()
    } else if (document.querySelector('.team-2-score').textContent === '21') {
      document.querySelector('.winner').textContent =
        document.querySelector('.team-2-name').textContent + ' wins!'
      teamOneLoses()
      teamTwoWins()
    }
  }
}
const teamWins = (teamName, teamScore) => {
  document.querySelector(teamName).style.color = 'green'
  document.querySelector(teamScore).style.color = 'green'
}

const teamOneWins = () => {
  teamWins('.team-1-name', '.team-1-score')
}

const teamTwoWins = () => {
  teamWins('.team-2-name', '.team-2-score')
}

const teamLoses = (teamName, teamScore) => {
  const loserName = document.querySelector(teamName).textContent
  const loserScore = document.querySelector(teamScore).textContent
  const nameStrike = loserName.strike()
  const scoreStrike = loserScore.strike()
  document.querySelector(teamName).innerHTML = nameStrike
  document.querySelector(teamScore).innerHTML = scoreStrike
  document.querySelector(teamName).style.color = 'red'
  document.querySelector(teamScore).style.color = 'red'
}

const teamOneLoses = () => {
  teamLoses('.team-1-name', '.team-1-score')
}

const teamTwoLoses = () => {
  teamLoses('.team-2-name', '.team-2-score')
}

const resetGame = () => {
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.round-count').textContent = 1
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.winner').textContent = ''
  document.querySelector('.team-1-name').style.color = 'black'
  document.querySelector('.team-2-name').style.color = 'black'
  document.querySelector('.team-1-score').style.color = 'rgb(158, 158, 158)'
  document.querySelector('.team-2-score').style.color = 'rgb(158, 158, 158)'
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-name'
  ).textContent
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-name'
  ).textContent
}

const nextRound = () => {
  if (document.querySelector('.round-count').textContent < 4) {
    const currentScore = document.querySelector('.round-count').textContent
    const addOne = parseInt(currentScore) + 1
    document.querySelector('.round-count').textContent = addOne
  }
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOne)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwo)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOneScore)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwoScore)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subTeamOneScore)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subTeamTwoScore)
document.querySelector('.reset').addEventListener('click', resetGame)
document.querySelector('.round-button').addEventListener('click', nextRound)
