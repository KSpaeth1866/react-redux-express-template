import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    return (
      <h1>Welcome to your React App</h1>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
