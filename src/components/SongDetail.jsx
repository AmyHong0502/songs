import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <p>Please select a song</p>;
  }

  return (
    <>
      <strong>Selected Song</strong>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
