import React from 'react'
import EasyGame from '../EasyGame/EasyGame'
import DifficultGame from '../DifficultGame/DifficultGame'
import './GameBoard.css'
import Img1 from '../../../assets/images/2647551.svg'
import Img2 from '../../../assets/images/2647591.svg'
import Img3 from '../../../assets/images/2647625.svg'
import Img4 from '../../../assets/images/2647628.svg'
import Img5 from '../../../assets/images/2647640.svg'
import Img6 from '../../../assets/images/2647641.svg'
import Img7 from '../../../assets/images/2647642.svg'
import Img8 from '../../../assets/images/2647645.svg'
import Img9 from '../../../assets/images/2647646.svg'
import Img10 from '../../../assets/images/2647648.svg'
import Img11 from '../../../assets/images/2647649.svg'
import Img12 from '../../../assets/images/2647652.svg'
import Img13 from '../../../assets/images/2647658.svg'
import Img14 from '../../../assets/images/2647660.svg'
import Img15 from '../../../assets/images/2647664.svg'
import Img16 from '../../../assets/images/2647668.svg'

// import Img17 from '../../../assets/images/2647670.svg'
// import Img18 from '../../../assets/images/2647673.svg'
// import Img19 from '../../../assets/images/2647677.svg'
// import Img20 from '../../../assets/images/2647683.svg'
// import Img21 from '../../../assets/images/2647691.svg'
// import Img22 from '../../../assets/images/2647700.svg'
// import Img23 from '../../../assets/images/2647703.svg'
// import Img24 from '../../../assets/images/2647706.svg'
// import Img25 from '../../../assets/images/2647708.svg'
// import Img26 from '../../../assets/images/2647711.svg'
// import Img27 from '../../../assets/images/2647716.svg'
// import Img28 from '../../../assets/images/2647721.svg'
// import Img29 from '../../../assets/images/2647722.svg'
// import Img30 from '../../../assets/images/boat.svg'


class GameBoard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      easyCards: [],
      difficultCards: [],
    }
  }

  componentWillMount() {
      const easy = [Img1, Img1, Img2, Img2, Img3, Img3, Img4, Img4, Img5, Img5, Img6, Img6, Img7, Img7, Img8, Img8];
      const hard = [Img1, Img1, Img2, Img2, Img3, Img3, Img4, Img4, Img5, Img5, Img6, Img6, Img7, Img7, Img8, Img8, Img9, Img9, Img10, Img10, Img11, Img11, Img12, Img12, Img13, Img13, Img14, Img14, Img15, Img15, Img16, Img16];
      this.updateCards(easy, hard)
      this.props.resetGame()
  }

  updateCards(easy, hard) {
    this.setState({
      easyCards: easy,
      difficultCards: hard,
    })
  }

  renderLevel() {
    if (this.props.level === 'easy') {
      return <EasyGame
                easyCards={this.state.easyCards}
                startGame={this.props.startGame}
                endGame={this.props.endGame}
                resetGame={this.props.resetGame}
                updateMatchesTally={this.props.updateMatchesTally}
                updatePerfectGame={this.props.updatePerfectGame}
                cardBackground={this.props.cardBackground}
            />
    } else if (this.props.level === 'difficult') {
      return <DifficultGame
                difficultCards={this.state.difficultCards}
                startGame={this.props.startGame}
                endGame={this.props.endGame}
                resetGame={this.props.resetGame}
                updateMatchesTally={this.props.updateMatchesTally}
                updatePerfectGame={this.props.updatePerfectGame}
                cardBackground={this.props.cardBackground}
              />
    } else {
      return
    }
  }

  render() {
    return (
      this.props.level === 'easy' ? <div className='gameboardeasy'>{this.renderLevel()}</div> : <div className='gameboarddifficult'>{this.renderLevel()}</div>
    )
  }
}

export default GameBoard
