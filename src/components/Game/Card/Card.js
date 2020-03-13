import React from 'react'
import './Card.css'


class Card extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  update() {
    if (this.props.symbol === null) {
      return <div className='symbol'>{this.props.symbol}</div>
    } else {
      return <div className='cardContainer'><div className='symbol'><img src={this.props.symbol} alt=""/></div></div>
    }
  }

  render() {
    return (
      this.update()
    )
  }

}

export default Card
