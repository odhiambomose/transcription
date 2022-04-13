import styles from "./Textbox.module.css"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Textarea from 'react-expanding-textarea'

const Textbox=()=> {
  const [transcript,setTranscript]=useState("")
  function onPressKey(e){  
    if(e.code==="Space"){
      const array1=transcript.split(" ")
console.log(array1[array1.length-2])
    }  

  }
  return (
    <div>
  
      <Textarea
        className={styles.textarea}
        
        id="my-textarea"
        maxLength="3000"
        name="pet[notes]"
         onChange={(e)=>setTranscript(e.target.value)}
        onKeyUp={onPressKey
        }
      

        
        
      />

      {
        transcript
      }
    </div>
  )
}

export default Textbox
 