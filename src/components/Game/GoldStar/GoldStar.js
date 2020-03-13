import React from 'react'
import './GoldStar.css'

class GoldStar extends React.Component {

  render() {
    return (
      <div className='flexContainer'>
        {this.props.perfectGame && this.props.matchesComplete !== 0 ?
          <div className='flexContainer'>
            <img className='star' src={require("../../../images/gold-star.png")} alt=""/>
          </div>
          :
          <div className='flexContainer'>
            <img src={require("../../../images/gold-star-empty.png")} alt=""/>
          </div>
        }
        <div className='info'>
          <p className='text'><span>Jouez une partie parfaite pour gagnez une étoile d'or!</span></p>
          <p className='text'>Trouvez toutes les correspondances sans retourner plus de deux fois la même carte.</p>
        </div>
      </div>
    )
  }
}


export default GoldStar
