import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ClockContainer from './ClockContainer';

export default class ClockManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocks: [],
    };

    this.addClock = this.addClock.bind(this);
    this.deleteClock = this.deleteClock.bind(this);
  }

  addClock({ name, timezone }) {
    this.setState((prev) => ({
      clocks: [...prev.clocks,
        {
          id: nanoid(),
          name,
          timezone,
        },
      ],
    }));
  }

  deleteClock(id) {
    this.setState((prev) => ({
      clocks: prev.clocks.filter((clock) => clock.id !== id),
    }));
  }

  render() {
    const { clocks } = this.state;

    return (
      <div className="Clocks">
        <Form addClock={this.addClock} />
        <ClockContainer
          clocks={clocks}
          onDelete={this.deleteClock}
        />
      </div>
    );
  }
}
