import React from 'react'
import Textbox from '../Textbox/Textbox';
import styles from "./MainPanel.module.css"


const MainPanel = ({transcript, setTranscript,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme,theTranscript,setTheTranscript,element,setElement}) => {
  const {primaryColor,secondaryColor,text} = theme;
  return (
    <div className={styles.main} >
       <Textbox transcript={transcript} setTranscript={setTranscript} textExpander={textExpander} setTextExpander={setTextExpander} storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders} theTranscript={theTranscript} setTheTranscript={setTheTranscript} element={element} setElement={setElement}/>

    </div>
  )
}

export default MainPanel
