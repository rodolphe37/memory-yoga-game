import React from 'react'
import './Game.css'
import GameContainer from './GameContainer/GameContainer.js'

class Game extends React.Component {

    render() {
    return (
        <div className="containerOuter">
            <div className="containerInner">
              <div className="head">
              <img className="logoGame" src={require("../../assets/images/yoga.svg")} alt=""/>
              <img className="App-logo" src={require("../../assets/images/mandala.png")} alt=""/>
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
