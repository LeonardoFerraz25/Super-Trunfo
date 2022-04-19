import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import ListCard from './components/ListCard';
/* import cartas from './components/data'; */

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardSave: [],
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const attrSum = 210;
      const attrValue = 90;
      if ((cardName.length >= 1)
      && (cardRare.length >= 1)
      && (cardDescription.length >= 1)
      && (cardImage.length >= 1)
      && (Number(cardAttr1) <= attrValue)
      && (Number(cardAttr1) >= 0)
      && (Number(cardAttr2) <= attrValue)
      && (Number(cardAttr2) >= 0)
      && (Number(cardAttr3) <= attrValue)
      && (Number(cardAttr3) >= 0)
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= attrSum)) {
        this.setState(({
          isSaveButtonDisabled: false,
        }));
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardSave,
    } = this.state;
    const infoCards = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    cardSave.push(infoCards);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    });
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
  }

  handleDelete = (name, trunfo) => {
    const { cardSave } = this.state;
    if (trunfo === true) {
      this.setState({
        hasTrunfo: false,
        cardTrunfo: false,
      });
    }
    this.setState({
      cardSave: cardSave.filter((card) => card.cardName !== name),
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardSave,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
        </main>
        <ListCard cardSave={ cardSave } handleDelete={ this.handleDelete } />
      </div>
    );
  }
}

export default App;
