import styles from "./Textbox.module.css"
import React, {  useState,useEffect } from 'react'



import Textarea from 'react-expanding-textarea'

const Textbox=({transcript, setTranscript,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme})=> {

  useEffect(()=>{
    const localTranscript = localStorage.getItem("transcript");
    setTranscript(localTranscript)

        },[])

  
  function onPressKey(e){  
    if(e.code==="Space"){
      const array1=transcript.split(" ")
const lastWord=array1[array1.length-2]

storeexpanders.forEach(element => {
  if(element.shortword===array1[array1.length-2]){
    array1[array1.length-2]=element.longword
  }
    setTranscript(array1.join(" "))
   console.log(transcript)
});

    }  


    localStorage.setItem("transcript", transcript)
  

    

  }
  return (
    <div>
  
      <Textarea
        className={styles.textarea}
        
        id="my-textarea"
        maxLength="3000"
        name="pet[notes]"
        value={transcript}
         onChange={(e)=>setTranscript(e.target.value)}
        onKeyUp={onPressKey
        }
      

        
        
      />
     

      {/* {
        transcript
      } */}
    </div>
  )
}

export default Textbox
 