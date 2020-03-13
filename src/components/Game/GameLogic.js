import React  from 'react'
import './EasyGame/EasyGame.css'

class GameLogic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      visibleCards: [],
      matched: [],
      deckLength: 0,
      gameOver: false,
      shuffled: [],
      totalClicks: [],
      count: 0,
    }
  }

  componentDidUpdate() {
    this.checkMatch()
  }

  updateDeckLength(deckLength) {
    this.setState({
      deckLength: deckLength,
    })
  }

  clickCard(symbol, id) {
    if (this.state.selected.length === 2) {
      return
    }
    this.selectCard(symbol, id)
    this.props.startGame()
  }

  selectCard(symbol, id) {
    if (id !== this.state.visibleCards[0]) {
    // ARRAY OCCURANCE FUNCTION ATTRIBUTION: https://stackoverflow.com/questions/13389398/finding-out-how-many-times-an-array-element-appears
    const testArray = this.state.totalClicks.filter(function(it) {return it === id;});
      if (testArray.length > 1) {
        this.props.updatePerfectGame()
      }
    this.setState({
      selected: this.state.selected.concat(symbol),
      visibleCards: this.state.visibleCards.concat(id),
      totalClicks: this.state.totalClicks.concat(id)
    })
    this.checkMatch();
    }
  }

  checkMatch() {
    if (this.state.selected.length === 2) {
      // ADJUST HOW LONG CARDS ARE VISIBLE BEFORE THEY FLIP BACK OVER.
      // SET TIMEOUT ALSO PREVENTS EXCEEDING MAXIMUM CALL STACK BECAUSE THIS
      // FUNCTION IS CALLED ON componentDidUpdate()
      setTimeout(() => {this.resetSelected(this.state.visibleCards[0], this.state.visibleCards[1])}, 1500)
    }
  }

  notMatched(id) {
    if (this.state.matched.indexOf(id) !== -1) {
      return false
    } else {
      return true
    }
  }

  checkForWin() {
    if (this.state.matched.length !== 0 && this.state.matched.length === this.state.deckLength) {
      this.props.endGame()
      this.setState({
        gameOver: true
      })
    }
  }

  resetSelected(id1, id2) {
    if (this.state.selected[0] === this.state.selected[1]) {
      this.setState({
        matched: this.state.matched.concat(id1, id2),
        selected: [],
        visibleCards: []
      })
      this.props.updateMatchesTally()
      this.checkForWin()
    } else {
      this.setState({
        selected: [],
        visibleCards: []
      })
    }
  }

  toggleStyle() {
    switch(this.props.cardBackground) {
      case 'nyc':
        return 'cardNyc'
      case 'aqua':
        return 'cardAqua'
      case 'magma':
        return 'cardMagma'
      case 'stripes':
        return 'cardStripes'
      case 'snow':
        return 'cardSnow'
      case 'classic':
        return 'cardClassic'
        default:
          return console.log("rien")
    }
  }

}

export default GameLogic
