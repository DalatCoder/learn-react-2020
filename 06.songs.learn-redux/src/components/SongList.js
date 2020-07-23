import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Convention
// Take data on redux store and map it to props inside of SongList component
const mapStateToProps = state => {
  // Return songs object from redux store
  // Inside SongList component, we have a songs on props object
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong
})(SongList);
