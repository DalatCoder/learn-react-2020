import { combineReducers } from 'redux';

// Static reducre, only return an array of songs
// No need to provide any params
const songsReducer = () => {
  return [
    { title: 'Duoi nhung con mua', length: '4:05' },
    { title: 'Nang am xa dan', length: '3:05' },
    { title: '1 phut', length: '6:05' },
    { title: 'Thi thoi', length: '4:45' }
  ];
};

// The first time selectedSongReducer gets invoked
// The defalt value of selectedSong is null
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
