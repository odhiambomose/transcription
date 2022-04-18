import React from 'react'
import styles from "./RightPanel.module.css"


import TextExpanders from '../TextExpanders/TextExpanders'
import Uploadfiles from '../uploadfiles/Uploadfiles'
const RightPanel = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders}) => {
  return (
    <div className={styles.right}>
    <div>
      <Uploadfiles/>
        <TextExpanders 
     expand={expand} setExpand={setExpand}
     textExpander={textExpander} setTextExpander={setTextExpander} 
     storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders}
     />
    </div>
    </div>
  )
}

export default RightPanel
