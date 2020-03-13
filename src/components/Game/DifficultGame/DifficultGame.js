import React from 'react'
import './DifficultGame.css'
import Card from '../Card/Card.js'
import GameLogic from '../GameLogic.js'

class DifficultGame extends GameLogic {

  componentWillMount() {
    let deck = this.props.difficultCards
    // RANDOMIZING FUNCTION ATTRIBUTION: https://www.w3schools.com/js/js_array_sort.asp
    deck = deck.sort(function(a, b) {return 0.5 - Math.random()})
    this.setState({
      shuffled: deck
    })
  }

  componentWillReceiveProps() {
    this.updateDeckLength(this.props.difficultCards.length)
  }

  renderCards() {

    let animate
    if (this.state.selected.length !== 2) {
      animate = 'animate'
    }

    return this.props.difficultCards && this.props.difficultCards.length !== 0 ? this.state.shuffled.map((symbol, id) => {
      if (this.notMatched(id)) {
      return (
        <div className='container' key={id} onClick={() => this.clickCard(symbol, id)}>
          <div className={this.toggleStyle() + ' ' + animate}>
            {id === this.state.visibleCards[0] || id === this.state.visibleCards[1] ? <Card symbol={symbol} id={id} selected={this.state.selected} /> : null}
          </div>
        </div>
      )
    } else {
      return (
        <div className='emptyContainer' key={id}>
          <div className='emptyCard'></div>
        </div>
      )
    }
    }) : null
  }

  render() {
    return (
      <div className='flex-container'>
        {this.renderCards()}
      </div>
    )
  }
}

export default DifficultGame
