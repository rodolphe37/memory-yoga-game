import React from 'react'
import './Game.css'
import GameContainer from './GameContainer/GameContainer.js'

class Game extends React.Component {

    render() {
    return (
        <div className="containerOuter">
            <div className="containerInner">
              <div className="head">
                <h1 className="header">Memory Yoga Cards Game</h1>
                <p>By Rodolphe Augusto</p>
              </div>
                <GameContainer />
            </div>
        </div>
    )
	}
}

export default Game
