import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';

class ClockContainer extends PureComponent {
  render() {
    const { clocks, onDelete } = this.props;

    return (
      <div className="ClockContainer">
        {
          clocks.map((clock) => (
            <Clock
              name={clock.name}
              timezone={Number(clock.timezone)}
              onDelete={() => onDelete(clock.id)}
              key={clock.id}
            />
          ))
        }
      </div>
    );
  }
}

ClockContainer.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ClockContainer;
