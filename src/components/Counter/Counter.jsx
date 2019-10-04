import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ cls, currentPage, pagerMax }) => (
  <p className={cls}>
    {currentPage} / {pagerMax}
  </p>
);

Counter.propTypes = {
  cls: PropTypes.string.isRequired,
  currentPage: PropTypes.number,
  pagerMax: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  currentPage: 1,
};

export default Counter;
