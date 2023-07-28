// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onclickCounter = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))

      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))

      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }

    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count, heads, tails, image} = this.state
    return (
      <div className="game-container">
        <div className="game-card-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-description">Heads (or) Tails</p>
          <div>
            <img src={image} alt="toss result" className="head-tail-image" />
          </div>

          <button type="button" onClick={this.onclickCounter}>
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {count}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
