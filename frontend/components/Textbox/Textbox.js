import styles from "./Textbox.module.css"
import React, { useEffect, useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';




const Textbox = ({ transcript, setTranscript, textExpander, setTextExpander, storeexpanders, setStoreexpanders, theme, setTheme, theTranscript, setTheTranscript, element, setElement}) => {

 






  const [eventArr, setEventArr] = useState([])
  useEffect(() => {
    const localTranscript = localStorage.getItem("transcript");
    setTranscript(() => localTranscript)
  }, [])

  useEffect(() => {

  }, [transcript])




  function onPressKey(e, index) {
    if (e.code === "Space") {

      let transcriptElements = [...element];
      let transcriptElement = transcriptElements[index];
      const array1 = transcriptElement.element.split(" ") || transcriptElement.element.split("/n")
      console.log(array1)
      const lastWord = array1[array1.length - 2]

      storeexpanders.forEach(word => {
        if (word.shortword === array1[array1.length - 2]) {
          array1[array1.length - 2] = word.longword
        }

        transcriptElement.element = array1.join(" ");
transcriptElements[index] = transcriptElement

        setElement(transcriptElements)
        console.log(transcriptElements)
      });

    }





    localStorage.setItem("transcript", transcript)



  }


  const handleKeyDown = (e) => {



    if (e.code === "Enter") {
      setEventArr(() => [...eventArr, e.code])
    }

  

    if (eventArr.length === 1) {
      setElement([...element, { element: "", show: false }])
      setEventArr([])
    }
  }










  return (
    <div>
      {
        element.map((item, index) => {
          return (
            <div key={index}>
            

              <TextareaAutosize
                className={styles.textarea}
                aria-label="minimum height"
                minRows={2}
                value={element[index].element}
                onChange={(e)=>{
                  let dataItems = [...element]
                  let dataItem = dataItems[index]
                  dataItem.element = e.target.value
                  dataItems[index] = dataItem
                  setElement(dataItems)


                }}
                onKeyUp={(e)=>onPressKey(e,index)}
                onKeyDown={handleKeyDown}
                autoFocus

              />


            </div>
          )
        })

      }













    </div>
  )
}

export default Textbox
