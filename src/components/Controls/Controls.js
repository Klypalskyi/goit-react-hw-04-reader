import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  cls,
  clsbtn,
  handlePrevious,
  handleNext,
  currentPage,
  pagerMax,
}) => (
  <section className={cls}>
    <button
      type="button"
      className={clsbtn}
      onClick={handlePrevious}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <button
      type="button"
      className={clsbtn}
      onClick={handleNext}
      disabled={currentPage === pagerMax}
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  cls: PropTypes.string.isRequired,
  clsbtn: PropTypes.string.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  pagerMax: PropTypes.number.isRequired,
};

Controls.defaultProps = {
  currentPage: 1,
};

export default Controls;
