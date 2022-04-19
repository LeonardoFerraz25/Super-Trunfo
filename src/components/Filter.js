import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filtro, changeFilter, filtroRaridade, filtroTrunfo, isDisabled } = this.props;

    return (
      <section className="container-filter">
        <h2>Filtros de Busca</h2>
        <div className="filtros">
          <input
            name="filtro"
            className="input-style"
            type="text"
            data-testid="name-filter"
            value={ filtro }
            onChange={ changeFilter }
            placeholder="Nome da Carta"
            disabled={ isDisabled }
          />
          <select
            data-testid="rare-filter"
            name="filtroRaridade"
            className="input-style"
            value={ filtroRaridade }
            onChange={ changeFilter }
            disabled={ isDisabled }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <label htmlFor="trunfo-filter">
            Super Trunfo
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              name="filtroTrunfo"
              className="trunfo-filter"
              value={ filtroTrunfo }
              onChange={ changeFilter }
            />
          </label>
        </div>
      </section>
    );
  }
}

Filter.propTypes = {
  filtro: PropTypes.string.isRequired,
  filtroRaridade: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filtroTrunfo: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Filter;
