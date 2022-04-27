import React, { useState } from 'react'
import Speakers from '../Speakers/Speakers'
import styles from "./LeftPanel.module.css"

const LeftPanel = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme,trackSpeakers,setTrackSpeakers,element,setElement}) => {
  const {primaryColor,secondaryColor,text} = theme;



  return (
      <div className={styles.left} style={{backgroundColor:secondaryColor}}>
    <div>
      <Speakers 
          expand={expand} setExpand={setExpand}
         textExpander={textExpander} setTextExpander={setTextExpander} 
         storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders}
         trackSpeakers={trackSpeakers} setTrackSpeakers={setTrackSpeakers}
         element={element} setElement={setElement}
      />
    </div>
    </div>
  )
}

export default LeftPanel
