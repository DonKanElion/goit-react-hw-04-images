import { useState } from 'react';
import PropTypes from 'prop-types';

import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

function Searchbar({ onSubmit, notifyWarning }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const checkSubmit = searchValue.trim();

    if (checkSubmit) {
      return onSubmit(checkSubmit);
    }
    notifyWarning(
      'It looks like you want to find nothing, please check your query.'
    );
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button
          type="submit"
          className="SearchForm-button"
          onClick={handleSubmit}
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
          onChange={handleChange}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  // isSubmitting: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  notifyWarning: PropTypes.func.isRequired,
};

export default Searchbar;
