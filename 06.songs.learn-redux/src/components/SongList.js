import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div>Song List</div>;
  }
}

// Convention
// Take data on redux store and map it to props inside of SongList component
const mapStateToProps = state => {
  // Return songs object from redux store
  // Inside SongList component, we have a songs on props object
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
