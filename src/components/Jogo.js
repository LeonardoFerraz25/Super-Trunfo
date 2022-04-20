import React from 'react';
import AllCards from './AllCards';
import '../css/Jogo.css'
import logo from '../imagens/super_trunfo.png';

class Jogo extends React.Component {
  constructor() {
    super();
    this.state = {
      baralho: [],
      play: false,
      index: 0,
      reset: false,
    }
  }

  getCards = () => {
    const { cards } = this.props;
    const cartas = cards.sort(() => Math.random() - 0.5)
    this.setState({ baralho: cartas }, () => { this.setState({ play: true, index: 0, reset: false })})
  }

  handleClick = () => {
    this.setState({ play: false })
  }

  nextCard = () => {
    const { index, baralho } = this.state;
    if (index < baralho.length - 1){
      this.setState((prevState) => ({
        index: prevState.index + 1
      }))
    }
    if (index === baralho.length -1) { this.setState({ reset: true }) }
  }

  render() {
    const { play, baralho, index, reset } = this.state;
    return (
      <div className="section-jogo">
        <div className="play">
          <div className="action">
            {play
              ? <AllCards
                  className="AllCards"
                  cardName={ baralho[index].cardName }
                  cardDescription={ baralho[index].cardDescription }
                  cardAttr1={ baralho[index].cardAttr1 }
                  cardAttr2={ baralho[index].cardAttr2 }
                  cardAttr3={ baralho[index].cardAttr3 }
                  cardImage={ baralho[index].cardImage }
                  cardRare={ baralho[index].cardRare }
                  cardTrunfo={ baralho[index].cardTrunfo }
                />
              : <button onClick={ this.getCards }>Jogar</button>
            }
          </div>
          <div className="verso">
            <img src={ logo } alt="logo super trunfo" />
          </div>
        </div>
        {play && <div className="botoes">
            {reset
              ? <button onClick={ this.handleClick}>embaralhar cartas</button>
              : <button onClick={ this.nextCard}> proxima carta </button>
            }
          </div> }
          
      </div>
    );
  }
}
 
export default Jogo;