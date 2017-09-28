function TennisApp(){
  let playerAScore = 0
  let playerBScore = 0
  const scoreString = ['Love','Fifteen','Thirthy','Forthy']
  this.reset = () => {
    playerAScore = 0
    playerBScore = 0
  }
  this.echo = () =>{
    if (playerAScore>3){
      return 'Player A wins game'
    }
    if (playerBScore>3){
      return 'Player B wins game'
    }
    return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
  }
  this.playerAGetScore = () => {
    playerAScore++
  }
  this.playerBGetScore = () => {
    playerBScore++
  }
}
