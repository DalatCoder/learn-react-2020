import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div clasName="ui segment">
        <form className="ui form">
          <div className="field">
            <label for="search">Image Search</label>
            <input id="search" type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
