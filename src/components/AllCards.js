import React from 'react';
import '../css/Card.css';
import PropTypes from 'prop-types';

class AllCards extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card">{cardName}</h2>
        <div className="card-img-wrapper">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <p data-testid="description-card" className="descricao">
          {cardDescription}
        </p>
        {cardTrunfo && (
          <p className="super-trunfo" data-testid="trunfo-card">
            Super Trunfo
          </p>)}
        <div className="atributos">
          <span>attr01......................................</span>
          <span data-testid="attr1-card" className="verde">{cardAttr1}</span>
          <br />
          <span>attr02.....................................</span>
          <span data-testid="attr2-card" className="verde">{cardAttr2}</span>
          <br />
          <span>attr03.....................................</span>
          <span data-testid="attr3-card" className="verde">{cardAttr3}</span>
          <br />
          <h3 className="raridade" data-testid="rare-card">{cardRare}</h3>
        </div>
      </div>

    );
  }
}

AllCards.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default AllCards;
