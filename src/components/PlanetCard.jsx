import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SistemaSolar.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div>
        <div data-testid="planet-card"> </div>
        <p className="name-planet" data-testid="planet-name">{ planetName }</p>
        <img className="cardPlanet" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
