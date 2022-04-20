import React from 'react'
import Speakers from '../Speakers/Speakers'
import styles from "./LeftPanel.module.css"

const LeftPanel = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme}) => {
  const {primaryColor,secondaryColor,text} = theme;
  return (
      <div className={styles.left} style={{backgroundColor:secondaryColor}}>
    <div>
      <Speakers 
          expand={expand} setExpand={setExpand}
         textExpander={textExpander} setTextExpander={setTextExpander} 
         storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders}
      />
    </div>
    </div>
  )
}

export default LeftPanel
