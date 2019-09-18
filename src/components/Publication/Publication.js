import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ cls, items, publication }) => (
  <article className={cls}>
    <h2>{items[publication].title}</h2>
    <p>{items[publication].text}</p>
  </article>
);

Publication.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  cls: PropTypes.string.isRequired,
  publication: PropTypes.number.isRequired,
};

export default Publication;
