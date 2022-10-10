import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../styles/SistemaSolar.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((el) => (
            <MissionCard
              key={ el.name }
              name={ el.name }
              year={ el.year }
              country={ el.country }
              destination={ el.destination }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
