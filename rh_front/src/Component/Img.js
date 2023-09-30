import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../params/Img.css';

class Img extends Component {
  render() {
    const { src, alt, width, height } = this.props;

    return (
      <img
        src={src}
        alt={alt}
        style={{ width: `${width}px`, height: `${height}px` }}
        className='custom-image'
      />
    );
  }
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Img;
