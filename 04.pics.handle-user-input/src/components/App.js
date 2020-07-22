import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async value => {
    const { data } = await unsplash.get('/search/photos', {
      params: { query: value }
    });

    this.setState({ images: data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
