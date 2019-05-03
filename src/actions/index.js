export const selectSong = song => {
  return {
    type: 'SONG_SELECTED', // required
    payload: 'song' // optional
  };
};
