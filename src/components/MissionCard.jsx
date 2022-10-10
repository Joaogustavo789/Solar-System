import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SistemaSolar.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="card-mission">
        <div data-testid="mission-card"> </div>
        <p className="name-mission" data-testid="mission-name">{ name }</p>
        <p className="year-mission" data-testid="mission-year">{ year }</p>
        <p className="country-mission" data-testid="mission-country">{ country }</p>
        <p className="destinationMi" data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default MissionCard;
