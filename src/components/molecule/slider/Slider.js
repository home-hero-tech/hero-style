import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import css from './Slider.module.scss';

const Slider = ({ children, settings, ...otherProps }) => {
  const renderItem = (item, index) => (
    <div key={index} className={css['c-slider__item']}>
      {item}
    </div>
  );

  return (
    <div className={css['c-slider']} {...otherProps}>
      <SlickSlider {...settings}>{children.map(renderItem)}</SlickSlider>
    </div>
  );
};

Slider.propTypes = {
  settings: PropTypes.shape({
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

Slider.defaultProps = {
  settings: {
    // dots: false,
    // arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
};

export default Slider;
