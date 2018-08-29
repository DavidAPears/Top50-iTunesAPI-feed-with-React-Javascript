import React from 'react';

const SongDetail = function (props) {
  // if(!props.selectedSong) return null;
  return (
    <div className="results-box">
      <p>#{props.chartPosition +1}</p>
      <p>"{props.song}"</p>
      <a href={props.track} target="_blank">*PLAY SONG HERE</a>
      <p>Artist: {props.artist}</p>
      {/* <p> {props.artist} </p> */}
      <img src={props.image}/>
      <br></br>
    </div>
  )
}


export default SongDetail;
