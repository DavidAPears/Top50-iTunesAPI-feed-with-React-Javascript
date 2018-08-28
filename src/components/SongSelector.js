import React from 'react';
import SongDetail from '../components/SongDetail.js';

 class SongSelector extends React.Component{
   render(){
     const options = this.props.songs.map((song, index) => {
       return <SongDetail
         song={song["im:name"].label}
         key={song.id.attributes["im:id"]}
         artist={song["im:artist"].label}
         chartPosition = {index}
         image = {song["im:image"][2].label}
         track = {song.link[1].attributes.href}



       />
     })
     return (
       <div>
         {options}
       </div>
     )
   }
 };

// const SongSelector = (props) => {
// function handleChange(evt){
//   props.onSongSelected(evt.target.value);
// }

  // <select
  //   id='song-selector'
  //   defaultValue="default"
  //   onChange={handleChange}
  // >
  //   <option disabled value="default">Choose a song...</option>
  //   {options}
  // </select>
  // )

export default SongSelector;
