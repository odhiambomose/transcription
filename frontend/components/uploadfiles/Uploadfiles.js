import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styles from "./Uploadfiles.module.css"
const Uploadfiles = () => {
  const [mediaUrl, setMediaUrl] = useState("")
  const [loader, setLoader] = useState(false);

  const [data, setData] = useState({
    name: "",
    body: {
      "speaker": ""
    },
    user_id: "",
    date: "",
    audio: ""

  })



  const handleFileUpload = async (e) => {
    setLoader(true)
    const files = e.target.files;
    const formData = new FormData();
    for (let file of files) {
      formData.append("file", file);
      formData.append("upload_preset", "transcription_audio")


    }

    const cloudinaryData = await fetch("https://api.cloudinary.com/v1_1/dgdvxziab/auto/upload", {
      method: "POST",
      body: formData
    });
    
    const data = await cloudinaryData.json();
    
    console.log(loader)
    setMediaUrl(data.secure_url)
    setLoader(false)
    console.log(loader)
    console.log(data);

    const url = "https://polar-crag-34351.herokuapp.com/api/transcript/new"

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }

    return fetch(url, options)
      .then(res => res.json())


  }


  return (




    <div>



      {(
        mediaUrl === "" ?
          <div style={{ border: "solid black 1px", padding: "1em" }}>
            <label for="fileUpload" style={{ height: "50px", background: "lightGrey", display: "flex", justifyContent: "center", alignItems: "center", gap: "1em", cursor: "pointer" }}><CloudUploadIcon />Upload audio/video</label>
            <input type="file" id="fileUpload" name='file' onChange={(e)=>{
              setLoader(true)
              handleFileUpload(e)
      }} placeholder='Upload audio/video' style={{ padding: "1em 2em", textAlign: "center", display: "none" }} />

            {
              loader && <div className={styles.loaderline}></div>
            }
          </div>


          :
          <ReactAudioPlayer
          className={styles.player}
            src={mediaUrl !== "" && mediaUrl}
            controls
          />
      )}




    </div>
  )
}

export default Uploadfiles

