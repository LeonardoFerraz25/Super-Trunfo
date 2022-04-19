import React from 'react';
import '../css/Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <section className="form-add-card">
        <h1>Adicionar Nova Carta</h1>
        <form className="form">
          <label htmlFor="name-input">
            <p>Nome:</p>
            <input
              className="form-control"
              data-testid="name-input"
              id="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="Digite um nome..."
            />
          </label>
          <label htmlFor="description-input">
            <p>Descrição:</p>
            <textarea
              placeholder="Digite uma descrição..."
              className="form-control"
              data-testid="description-input"
              name="cardDescription"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            <span>Attr01:</span>
            <input
              className="input-atr"
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr2">
            <span>Attr02:</span>
            <input
              className="input-atr"
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr3">
            <span>Attr03:</span>
            <input
              className="input-atr"
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="input-image">
            <span>Imagem:</span>
            <input
              className="input-atr input-img"
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="input-image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            <p>Raridade:</p>
            <select
              data-testid="rare-input"
              name="cardRare"
              id="raridade"
              className="form-control"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            {hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>
            ) : (
              <>
                <input
                  className="trunfo-input"
                  data-testid="trunfo-input"
                  type="checkbox"
                  name="cardTrunfo"
                  id="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                <span>Super Tryber Trunfo</span>
              </>
            )}
          </label>
          <button
            className="salve-btn"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            type="button"
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
