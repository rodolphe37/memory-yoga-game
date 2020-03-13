import React from 'react'
import './Toolbar.css'
import Timer from '../../Timer/Timer.js'
import Settings from '../Settings/Settings.js'
import ScoreBoard from '../ScoreBoard/ScoreBoard.js'
import GoldStar from '../GoldStar/GoldStar.js'

const Toolbar = ({
  gameStarted,
  gameEnded,
  openSettings,
  matchesComplete,
  level,
  perfectGame,
  getGameTime
}) => (
    <div className='flexy'>
      <div className='items'>
        <Settings openSettings={openSettings} />
      </div>  
      <h4 className='items'> | </h4>
      <div className='items'>
        <Timer gameStarted={gameStarted} gameEnded={gameEnded} getGameTime={getGameTime} />
      </div>
      <h4 className='items'> | </h4>
      <div className='items'>
        <ScoreBoard matchesComplete={matchesComplete} level={level} />
      </div>
        <h4 className='items'> | </h4>
      <div className='items'>
        <GoldStar perfectGame={perfectGame} matchesComplete={matchesComplete} />
      </div>  
    </div>
)

export default Toolbar
