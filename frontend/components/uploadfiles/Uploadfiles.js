import React,{useState,useEffect} from 'react'
import ReactAudioPlayer from 'react-audio-player';

 const Uploadfiles = () => {
  


   return (
      <div style={{border:"solid black 1px",padding:"1em"}}>
  <input type="file" placeholder='Upload audio/video' style={{padding:"1em 2em",textAlign:"center",margin:"0 auto", display:"flex"}}/>
     </div>
   )
 }

 export default Uploadfiles

