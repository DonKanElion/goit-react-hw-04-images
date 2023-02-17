import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.props.notifyWarning('It looks like you want to find nothing, please check your query.')
  };

  render() {
    // const  { onSubmit, onClick } = this.props;

    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handleSubmit}
            // disabled={this.props.isSubmitting}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 32 32">
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
