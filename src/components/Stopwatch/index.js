// Write your code here
import {Component} from 'react'
import './index.css'
class StopWatch extends Component {
  state = {
    seconds: 0,
    running: false,
  }

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }
  start = () => {
    const {running} = this.state
    if (!running) {
      this.timerId = setInterval(this.tick, 1000)
      this.setState({running: true})
    }
  }
  stop = () => {
    const {running} = this.state
    if (running) {
      clearInterval(this.timerId)
    }
  }
  reset = () => {
    const {running} = this.state
    if (running) {
      clearInterval(this.timerId)
      this.setState({running: false, seconds: 0})
    }
  }
  time = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const second = Math.floor(seconds % 60)
    const stringsecond = second <= 9 ? `0${second}` : `${second}`
    const stringminute = minutes <= 9 ? `0${minutes}` : `${minutes}`
    return `${stringminute}:${stringsecond}`
  }

  render() {
    const {seconds} = this.state
    return (
      <div className="main">
        <div className="center">
          <h1>Stopwatch</h1>
          <div className="card">
            <div className="side">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="time">Timer</p>
            </div>
            <h1 className="seconds">{this.time()}</h1>
            <div className="side">
              <button onClick={this.start} className="btn green">
                Start
              </button>
              <button onClick={this.stop} className="btn red">
                Stop
              </button>
              <button onClick={this.reset} className="btn yellow">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
