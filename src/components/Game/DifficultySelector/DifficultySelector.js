import React from 'react'
import './DifficultySelector.css'

class DifficultySelector extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className='parentflex'>
        <div className='container'>
          <button className={this.props.level === 'easy' ? 'easy' : 'button'} onClick={() => this.props.toggle('easy')}>Facile</button>
          <p className='separator'>|</p>
          <button className={this.props.level === 'difficult' ? 'difficult' : 'button'} onClick={() => this.props.toggle('difficult')}>Difficile</button>
          <p className='separator'>|</p>
          <button className='resetbutton' onClick={() => this.props.resetGame()}>Reinitialiser le jeu</button>
        </div>
        <div className='container'>
          <button className='button' onClick={() => this.props.openRulesModal()}>Comment jouer ?</button>
        </div>
      </div>
    )
  }
}

export default DifficultySelector
