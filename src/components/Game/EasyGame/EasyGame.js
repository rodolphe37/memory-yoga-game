import React from 'react'
import './EasyGame.css'
import Card from '../Card/Card.js'
import GameLogic from '../GameLogic.js'

class EasyGame extends GameLogic {

  componentWillMount() {
    let deck = this.props.easyCards
    deck = deck.sort(function(a, b) {return 0.5 - Math.random()})
    this.setState({
      shuffled: deck
    })
  }

  componentWillReceiveProps() {
    this.updateDeckLength(this.props.easyCards.length)
  }

  renderCards() {
    let animate
    if (this.state.selected.length !== 2) {
      animate = 'animate'
    }
    return this.props.easyCards && this.props.easyCards.length !== 0 ? this.state.shuffled.map((symbol, id) => {
      if (this.notMatched(id)) {
        return (
          <div className='container' key={id} onClick={() => this.clickCard(symbol, id)} >
            <div className={this.toggleStyle() + ' ' + animate}>
              {id === this.state.visibleCards[0] || id === this.state.visibleCards[1] ? <Card symbol={symbol} id={id} selected={this.state.selected} /> : <Card symbol={null} id={null} selected={null} />}
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
      <div className='flex'>
        {this.renderCards()}
      </div>
    )
  }


}


export default EasyGame
