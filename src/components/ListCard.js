import React from 'react';
import PropTypes from 'prop-types';
import AllCards from './AllCards';
import Filter from './Filter';

class ListCard extends React.Component {
  constructor() {
    super();
    this.state = {
      filtro: '',
      filtroRaridade: '',
      filtroTrunfo: false,
      isDisabled: false,
    };
  }

  changeFilter = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => {
      const { filtroTrunfo } = this.state;
      this.setState({ isDisabled: filtroTrunfo });
    });
  }

  render() {
    const { filtro, filtroRaridade, filtroTrunfo, isDisabled } = this.state;
    const { handleDelete, cardSave } = this.props;
    const cartas = cardSave.filter((iten) => {
      if (filtroTrunfo) {
        return iten.cardTrunfo === true;
      }
      if (filtroRaridade) {
        return iten.cardRare === filtroRaridade;
      }
      const nameLower = iten.cardName.toLowerCase();
      const filterNameLower = filtro.toLowerCase();
      return nameLower.includes(filterNameLower);
    });
    return (
      <section className="section-baralho">
        <div className="filtro">
          <h1>Todas as cartas</h1>
          <Filter
            changeFilter={ this.changeFilter }
            filtro={ filtro }
            filtroRaridade={ filtroRaridade }
            filtroTrunfo={ filtroTrunfo }
            isDisabled={ isDisabled }
          />
        </div>
        <section className="lista-cartas">
          {cartas.map((iten) => (
            <div className="box-card" key={ iten.cardName }>
              <AllCards
                className="AllCards"
                cardName={ iten.cardName }
                cardDescription={ iten.cardDescription }
                cardAttr1={ iten.cardAttr1 }
                cardAttr2={ iten.cardAttr2 }
                cardAttr3={ iten.cardAttr3 }
                cardImage={ iten.cardImage }
                cardRare={ iten.cardRare }
                cardTrunfo={ iten.cardTrunfo }
                isSaveButtonDisabled={ iten.isSaveButtonDisabled }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => handleDelete((iten.cardName), (iten.cardTrunfo)) }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

ListCard.propTypes = {
  cardSave: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListCard;
