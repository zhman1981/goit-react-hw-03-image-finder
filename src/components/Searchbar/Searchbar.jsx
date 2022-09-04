import React from 'react';

function Searchbar(props) {
  return (
    <header className="Searchbar">
      <form
        className="SearchForm"
        onSubmit={evt => {
          evt.preventDefault();
          props.onSubmit(evt.currentTarget.inputName.value);
          evt.currentTarget.inputName.value = '';
        }}
      >
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="inputName"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
