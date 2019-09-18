import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './PostReader.module.css';

class PostReader extends PureComponent {
  constructor({ items }) {
    super({ items });
    this.state = {
      publication: 0,
      currentPage: 1,
      pagerMax: items.length,
    };
  }

  handleNext = () => {
    const { pagerMax, currentPage } = this.state;
    if (currentPage < pagerMax) {
      this.setState(prev => ({
        publication: prev.publication + 1,
        currentPage: prev.currentPage + 1,
      }));
    }
  };

  handlePrevious = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState(prev => ({
        publication: prev.publication - 1,
        currentPage: prev.currentPage - 1,
      }));
    }
  };

  render() {
    const { items } = this.props;
    const { pagerMax, currentPage, publication } = this.state;
    return (
      <div className={styles.reader}>
        <article className={styles.publication}>
          <h2>{items[publication].title}</h2>
          <p>{items[publication].text}</p>
        </article>

        <p className={styles.counter}>
          {currentPage} / {pagerMax}
        </p>

        <section className={styles.controls}>
          <button
            type="button"
            className={styles.button}
            onClick={this.handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={this.handleNext}
            disabled={currentPage === pagerMax}
          >
            Next
          </button>
        </section>
      </div>
    );
  }
}

PostReader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PostReader;
