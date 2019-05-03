import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Lorem Ipsum',
      duration: '4:03'
    },
    {
      title: 'Foo Song',
      duration: '5:12'
    },
    {
      title: 'Bar Bar',
      duration: '2:34'
    }
  ];
};

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
