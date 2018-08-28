import React from 'react';

const SongDetail = function (props) {
  // if(!props.selectedSong) return null;
  return (
    <div className="results-box">
      <p>#{props.chartPosition +1}</p>
      <p>"{props.song}"</p>
      <p>Artist: {props.artist}</p>
      <p> {props.artist} </p>
      <img src={props.image}/>
      <a href={props.track} target="_blank">*PLAY SONG HERE</a>
    </div>
  )
}


export default SongDetail;
