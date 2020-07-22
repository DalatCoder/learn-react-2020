import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async value => {
    const { data } = await unsplash.get('/search/photos', {
      params: { query: value }
    });

    console.log(data.results);
    this.setState({ images: data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
