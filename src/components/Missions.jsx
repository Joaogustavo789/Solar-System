import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions"> </div>
        <div>
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
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
