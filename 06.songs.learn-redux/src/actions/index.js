// Action creator for select a song
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
