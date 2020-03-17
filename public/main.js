const main = () => {
  document.getElementsByClassName('.team-1-name').innerHTML
  let t1Name = document.querySelector('.team-1-name').textContent
  if (t1Name == null) {
    t1Name = 'Team1'
    document.querySelector('.team-1-name').textContent = t1Name
  } else {
    document.querySelector('.team-1-name').textContent = t1Name
    console.log(t1Name)
  }
  document.getElementsByClassName('.team-1-name').innerHTML = t1Name
  let t2Name = document.querySelector('.team-2-name').textContent
  if (t2Name == null) {
    t2Name = 'Team2'
    document.querySelector('.team-2-name').textContent = t2Name
  } else {
    document.querySelector('.team-2-name').textContent = t2Name
    console.log(t2Name)
  }
  document.getElementsByClassName('.team-2-name').innerHTML = t2Name
  let t1Score = document.querySelector('.team-1-score').textContent
  if (t1Score == null) {
    t1Score = '0'
    document.querySelector('.team-1-score').textContent = t1Score
  } else {
    document.querySelector('.team-1-score').textContent = t1Score
    console.log(t1Score)
  }
  document.getElementsByClassName('.team-1-score').innerHTML = t1Score
  let t2Score = document.querySelector('.team-2-score').textContent
  if (t2Score == null) {
    t2Score = '0'
    document.querySelector('.team-2-score').textContent = t2Score
  } else {
    document.querySelector('.team-2-score').textContent = t2Score
    console.log(t2Score)
  }
  document.getElementsByClassName('.team-2-score').innerHTML = t2Score
  const UpdateTeam1 = input => {
    console.log('Update Team1 name to ' + input)
    const t1Name = input.toString()
    console.log(t1Name)
    document.querySelector('.team-1-name').textContent = t1Name
    document.getElementsByClassName('.team-1-name').innerHTML = t1Name
  }
  const UpdateTeam2 = input => {
    console.log('Update Team2 name to ' + input)
    const t2Name = input.toString()
    document.querySelector('.team-2-name').textContent = t2Name
    document.getElementsByClassName('.team-2-name').innerHTML = t2Name
  }

  const Add1ToTeam1 = () => {
    console.log('Add 1 to team 1 button clicked')
    const teamOneScore = document.querySelector('.team-1-score').textContent
    const team1Int = parseInt(teamOneScore) + 1
    console.log(team1Int)
    const t1Score = team1Int.toString()
    document.querySelector('.team-1-score').textContent = team1Int.toString()
    document.getElementsByClassName('.team-1-score') = t1Score
  }

  const Add1ToTeam2 = () => {
    console.log('Add 1 to team 2 button clicked')
    const teamTwoScore = document.querySelector('.team-2-score').textContent
    const team2Int = parseInt(teamTwoScore) + 1
    console.log(team2Int)
    document.querySelector('.team-2-score').textContent = team2Int.toString()
    document.getElementsByClassName('.team-2-score').innerHTML = t2Score
  }

  const Subtract1FromT1 = () => {
    console.log('Subtract 1 from team 1 button clicked')
    const teamOneScore = document.querySelector('.team-1-score').textContent
    const team1Int = parseInt(teamOneScore) - 1
    console.log(team1Int)
    document.querySelector('.team-1-score').textContent = team1Int.toString()
    document.getElementsByClassName('.team-1-score') = t1Score
  }
  const Subtract1FromT2 = () => {
    console.log('Subtract 1 from team 2 button clicked')
    const teamTwoScore = document.querySelector('.team-2-score').textContent
    const team2Int = parseInt(teamTwoScore) - 1
    console.log(team2Int)
    document.querySelector('.team-2-score').textContent = team2Int.toString()
    document.getElementsByClassName('.team-2-score').innerHTML = t2Score
  }
  document.addEventListener('DOMContentLoaded', main)

  document
    .querySelector('.team-1-add-1-button')
    .addEventListener('click', Add1ToTeam1)

  document
    .querySelector('.team-2-add-1-button')
    .addEventListener('click', Add1ToTeam2)

  document
    .querySelector('.team-1-subtract-1-button')
    .addEventListener('click', Subtract1FromT1)

  document
    .querySelector('.team-2-subtract-1-button')
    .addEventListener('click', Subtract1FromT2)

  document
    .querySelector('.update-team-1-name')
    .addEventListener('click', UpdateTeam1)

  document
    .querySelector('.update-team-2-name')
    .addEventListener('click', UpdateTeam2)
}
