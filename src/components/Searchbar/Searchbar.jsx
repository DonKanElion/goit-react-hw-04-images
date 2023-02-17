import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

class Searchbar extends Component {
  static propTypes = {
    // isSubmitting: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    notifyWarning: PropTypes.func.isRequired,
  };

  state = {
    searchValue: '',
  };

  handleChange = evt => {
    const { value } = evt.target;

    this.setState({
      searchValue: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    const { searchValue } = this.state;
    const checkSubmit = searchValue.trim();

    if (checkSubmit) {
      return onSubmit(searchValue);
    }
    this.props.notifyWarning(
      'It looks like you want to find nothing, please check your query.'
    );
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handleSubmit}
            // disabled={this.props.isSubmitting}
          >
            <IconContext.Provider value={{ size: '20px' }}>
              <div>
                <FcSearch />
              </div>
            </IconContext.Provider>
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            onChange={this.handleChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
