import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async value => {
    const { data } = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: value
      },
      headers: {
        Authorization: 'Client-ID mO_3krchfL-gTxVcORoxGenytpNH6ESsfcBZkOG4YGI'
      }
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
