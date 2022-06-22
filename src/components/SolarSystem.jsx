import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system"> </div>
        <div>
          {
            Planets.map((e) => (
              <PlanetCard
                key={ e.name }
                planetName={ e.name }
                planetImage={ e.image }
              />
            ))
          }
        </div>
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
