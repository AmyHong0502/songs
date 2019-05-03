import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div key={song.title}>
          <p>{song.title}</p>
          <p>{song.duration}</p>
          <button>Select</button>
        </div>
      );
    });
  }

  render() {
    return <>{this.renderList()}</>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
