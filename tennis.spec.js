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
describe('When Player A get score',() => {
  it('should echo "Love - Love" When game start',() => {
    let app = new TennisApp()
    app.reset()

    let result = app.echo()

    expect(result).toBe("Love - Love")
  })

  it('should echo "Fifteen - Love" When player A get frist score',() =>{
    let app = new TennisApp()
    app.reset()
    app.playerAGetScore()

    let result = app.echo()

    expect(result).toBe("Fifteen - Love")
  })

})
