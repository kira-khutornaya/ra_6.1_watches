/* eslint class-methods-use-this: ["error", { "exceptMethods": ["calcRatio"] }] */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);

    const { timezone } = this.props;
    this.state = {
      clock: moment().utcOffset(timezone),
    };
  }

  componentDidMount() {
    const { timezone } = this.props;

    this.interval = setInterval(() => {
      this.setState({
        clock: moment().utcOffset(timezone),
      });
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calcRatio(time) {
    const secondRatio = time.second() / 60;
    const minuteRatio = (secondRatio + time.minute()) / 60;
    const hourRatio = (minuteRatio + time.hour()) / 12;

    return { hourRatio, minuteRatio, secondRatio };
  }

  render() {
    const { clock } = this.state;
    const { name, onDelete } = this.props;
    const { hourRatio, minuteRatio, secondRatio } = this.calcRatio(clock);

    return (
      <div className="Clock">
        <div className="Clock__control">
          <div className="Clock__name">{name}</div>
          <button
            className="Clock__btn_remove"
            type="button"
            onClick={onDelete}
          >
            ✘
          </button>
        </div>
        <div className="Clock__face">
          <div
            className="Clock-face__hour"
            style={{ transform: `rotate(${hourRatio * 360}deg)` }}
          >
            <div className="hr" />
          </div>
          <div className="Clock-face__minute" style={{ transform: `rotate(${minuteRatio * 360}deg)` }}>
            <div className="mn" />
          </div>
          <div className="Clock-face__second" style={{ transform: `rotate(${secondRatio * 360}deg)` }}>
            <div className="sc" />
          </div>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
  timezone: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Clock;
