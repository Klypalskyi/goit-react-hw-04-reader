import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ cls, clsbtn, onButtonClick, currentPage, pagerMax }) => (
  <section className={cls}>
    <button
      type="button"
      className={clsbtn}
      onClick={onButtonClick}
      disabled={currentPage === 1}
      name="Previous"
    >
      Previous
    </button>
    <button
      type="button"
      className={clsbtn}
      onClick={onButtonClick}
      disabled={currentPage === pagerMax}
      name="Next"
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  cls: PropTypes.string.isRequired,
  clsbtn: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  pagerMax: PropTypes.number.isRequired,
};

Controls.defaultProps = {
  currentPage: 1,
};

export default Controls;
