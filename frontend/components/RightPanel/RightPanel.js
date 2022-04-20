import React from 'react'
import styles from "./RightPanel.module.css"


import TextExpanders from '../TextExpanders/TextExpanders'
import Uploadfiles from '../uploadfiles/Uploadfiles'
const RightPanel = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme}) => {
  const {primaryColor,secondaryColor,text} = theme;

  return (
    <div className={styles.right} style={{backgroundColor:secondaryColor}}>
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
