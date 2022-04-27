import styles from "./Textbox.module.css"
import React, { useEffect, useState } from 'react'
// import Textarea from 'react-expanding-textarea'




const Textbox = ({ transcript, setTranscript, textExpander, setTextExpander, storeexpanders, setStoreexpanders, theme, setTheme, theTranscript, setTheTranscript,element,setElement }) => {

const [eventArr, setEventArr] = useState(["Enter"])
  useEffect(() => {
    const localTranscript = localStorage.getItem("transcript");
    setTranscript(() => localTranscript)
  }, [])

  useEffect(() => {

  }, [transcript])




  function onPressKey(e) {
    if (e.code === "Space") {
      const array1 = transcript.split(" ")
      const lastWord = array1[array1.length - 2]

      storeexpanders.forEach(element => {
        if (element.shortword === array1[array1.length - 2]) {
          array1[array1.length - 2] = element.longword
        }
        setTranscript(array1.join(" "))
        console.log(transcript)
      });

    }





    localStorage.setItem("transcript", transcript)



  }

  
  const handleKeyDown = (e) => {

    

    if(e.code==="Enter"){
      setEventArr(()=>[...eventArr, e.code])
    }

    console.log(eventArr)

    if(eventArr.length === 2) {
      setElement([...element, {element:"",show:false}])
      setEventArr([])
    }
  }




  return (
    <div>
{
element.map((item, index)=>{
  return (
    <div key={index}>
    <textarea
    className={styles.textarea}


    value={transcript}
    onKeyUp={onPressKey}
    onKeyDown={handleKeyDown}
    onChange={(e) => setTranscript(e.target.value)}
    autoFocus

  >


  </textarea>
  </div>
  )
})

}

  











    </div>
  )
}

export default Textbox
