import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ cls, publication }) => (
  <article className={cls}>
    <h2>{publication.title}</h2>
    <p>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  cls: PropTypes.string.isRequired,
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
