import React from 'react'
import Speakers from '../Speakers/Speakers'
import styles from "./LeftPanel.module.css"

const LeftPanel = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders}) => {
  return (
      <div className={styles.left}>
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
