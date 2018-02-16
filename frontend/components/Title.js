import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  constructor(props) {
    super(props);
  }

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
