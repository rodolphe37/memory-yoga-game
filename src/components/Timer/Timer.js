import React from 'react'

import './Timer.css'

export const formatTime = time => {
	let sec = time % 60;
	let min = parseInt(time / 60);
    return sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`
}


const Timer = ({ time = 0 }) => <div className="timer">{formatTime(time)}</div>

class TimerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    if (this.props.gameEnded) {
      this.props.getGameTime(formatTime(this.state.secondsElapsed))
    }
    if (this.props.gameStarted && !this.props.gameEnded) {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1,
      })
    }
    if (!this.props.gameStarted && !this.props.gameEnded) {
      this.setState({
        secondsElapsed: 0,
      })
    }
  }

  render() {
    return <Timer time={this.state.secondsElapsed} />
  }
}

export default TimerContainer
