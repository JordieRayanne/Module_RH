import React, { Component } from 'react';
import '../params/SimpleForm.css';
import PropTypes from 'prop-types';

class SimpleForm extends Component {
  

  // Handle form field changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted:', this.state);
  };

  render() {
    const { title } = this.props;

    return (
      <div className="simple-form-container">
        <h2>{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Price Min:</label>
            <input
              type="text"
              id="name"
              name="name"
              value=""
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Price Min:</label>
            <input
              type="email"
              id="email"
              name="email"
              value=""
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">validate</button>
        </form>
      </div>
    );
  }
}

SimpleForm.propTypes = {
  title: PropTypes.string,
};

export default SimpleForm;
