import React,{useState,useEffect} from 'react'
import ReactAudioPlayer from 'react-audio-player';

 const Uploadfiles = () => {
const[data,setData]=useState({
name:"",
body:{
  "speaker":""
},
user_id:"",
date:"",
audio:""

})
 

  
  const handleFileUpload = async (e)=>{
    const files = e.target.files;
    const formData = new FormData();
    for(let file of files) {
      formData.append("file", file);
      formData.append("upload_preset", "transcription_audio")
     
      
    }

    const cloudinaryData = await fetch("https://api.cloudinary.com/v1_1/dgdvxziab/auto/upload", {
      method:"POST",
      body:formData
    });

    const data = await cloudinaryData.json();
    console.log(data);

const url="https://polar-crag-34351.herokuapp.com/api/transcript/new"

const options={
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(data)
      }

      return  fetch(url,options)
      .then(res=>res.json())


  }


   return (
      <div style={{border:"solid black 1px",padding:"1em"}}>
  <input type="file" name='file' onChange={handleFileUpload} placeholder='Upload audio/video' style={{padding:"1em 2em",textAlign:"center",margin:"0 auto", display:"flex"}}/>
     </div>
   )
 }

 export default Uploadfiles

