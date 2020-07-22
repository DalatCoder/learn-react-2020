import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(value) {
    console.log(`User submit form with value of: ${value}`);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
