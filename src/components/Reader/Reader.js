import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends PureComponent {
  state = {
    currentPage: 0,
  };

  handleButtonClick = ({ target }) => {
    const { name } = target;
    const { items } = this.props;
    const { currentPage } = this.state;
    if (name === 'Next' && currentPage !== items.length) {
      this.setState(prev => ({
        currentPage: prev.currentPage + 1,
      }));
    }
    if (name === 'Previous' && currentPage > 0) {
      this.setState(prev => ({
        publication: prev.publication - 1,
        currentPage: prev.currentPage - 1,
      }));
    }
  };

  render() {
    const { items } = this.props;
    const { currentPage } = this.state;
    return (
      <div className={styles.reader}>
        <Publication
          cls={styles.publication}
          publication={items[currentPage]}
        />

        <Counter
          cls={styles.counter}
          currentPage={currentPage + 1}
          pagerMax={items.length}
        />

        <Controls
          cls={styles.controls}
          clsbtn={styles.button}
          onButtonClick={this.handleButtonClick}
          currentPage={currentPage + 1}
          pagerMax={items.length}
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
