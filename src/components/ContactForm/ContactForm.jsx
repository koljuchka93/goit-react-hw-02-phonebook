import {Component } from "react";
import PropTypes from "prop-types";

export class ContactForm extends Component {
  state = {
      name: '',
      number: '',
  };

  handleChange = e => {
      const { name, value } = e.currentTarget;
      this.setState ({ [name]: value });
  };
  handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({ name: '', number: '' });

  };
  render() {
      const { name, number } = this.state;
      return (
          <form onSubmit={this.handleSubmit}>
              <label>Name
                  <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      placeholder="Name" />
              </label>
              <label>Number
                  <input 
                      type="text"
                      name="number"
                      value={number}
                      onChange={this.handleChange}
                      placeholder="099-00-00" />
              </label>
              <button type="submit">
                      Add contact
                  </button>
          </form>
      )
  }
}

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
};