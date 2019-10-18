import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';
import Controls from '../Controls/Controls';

class Reader extends PureComponent {
  state = {
    currentPage: 0,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const { search } = location;
    const query = qs.parse(search);
    if (query.item) {
      this.setState({
        currentPage: +query.item - 1,
      });
    }
    history.replace('/reader?item=1');
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.currentPage;
    const { currentPage } = this.state;
    const { history, location } = this.props;
    if (prevPage !== currentPage) {
      history.push(`${location.pathname}?item=${currentPage + 1}`);
    }
  }

  handleButtonClick = ({ target: { name } }) => {
    const { items } = this.props;
    const { currentPage } = this.state;
    this.setState(prev => ({
      currentPage:
        name === 'Next' && currentPage !== items.length
          ? prev.currentPage + 1
          : name === 'Previous' && currentPage > 0
          ? prev.currentPage - 1
          : null,
    }));
  };

  render() {
    const { items } = this.props;
    const { currentPage } = this.state;
    const page = currentPage + 1;
    return (
      <div className={styles.reader}>
        <Publication
          cls={styles.publication}
          publication={items[currentPage]}
        />
        <p className={styles.counter}>
          {page} / {items.length}
        </p>
        <Controls
          cls={styles.controls}
          clsbtn={styles.button}
          onButtonClick={this.handleButtonClick}
          currentPage={page}
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
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reader;
