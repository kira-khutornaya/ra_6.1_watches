import React, { Component } from 'react';
import PropTypes from 'prop-types';
import INITIAL_FORM_STATE from '../ClockManager.constants';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_FORM_STATE;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { addClock } = this.props;

    addClock(this.state);
    this.setState(INITIAL_FORM_STATE);
  }

  render() {
    const { name, timezone } = this.state;

    return (
      <div className="Form__control">
        <form
          className="Form"
          onSubmit={this.onSubmit}
        >
          <div className="Form__group">
            <label htmlFor="name">Название</label>
            <input
              className="Form__field"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="Form__group">
            <label htmlFor="timezone">Временная зона</label>
            <input
              className="Form__field"
              id="timezone"
              type="text"
              name="timezone"
              value={timezone}
              onChange={this.onChange}
            />
          </div>

          <button
            className="Form__button button"
            type="submit"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addClock: PropTypes.func.isRequired,
};

export default Form;
