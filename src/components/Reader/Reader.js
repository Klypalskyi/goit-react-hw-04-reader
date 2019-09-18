import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends PureComponent {
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
        <Publication
          cls={styles.publication}
          items={items}
          publication={publication}
        />

        <Counter
          cls={styles.counter}
          currentPage={currentPage}
          pagerMax={pagerMax}
        />

        <Controls
          cls={styles.controls}
          clsbtn={styles.button}
          handlePrevious={this.handlePrevious}
          handleNext={this.handleNext}
          currentPage={currentPage}
          pagerMax={pagerMax}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reader;
