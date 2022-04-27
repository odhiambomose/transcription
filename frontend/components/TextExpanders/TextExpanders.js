import React from 'react'
import styles from "./TextExpanders.module.css"

const TextExpanders = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme}) => {
    
  

function addExpander(){
    
    setStoreexpanders([...storeexpanders,textExpander])

    console.log(storeexpanders)
    
} 




















function addHandler(){
setExpand(()=>! expand)
}

function renderExpands(){
    return(
<div className={styles.expernders}>
    <div >
    <label>Expand</label>
 <input type="text" placeholder="Enter shortform" className={styles.expand} onChange={(e)=>setTextExpander({...textExpander, shortword:e.target.value})}/>
 </div>
 <div className={styles.phase1}>
 <label>To</label>
 <input type="text" placeholder="Expand" className={styles.expand} onChange={(e)=>setTextExpander({...textExpander,longword:e.target.value})}/>
 </div>
 <button onClick={addExpander} >Add expander</button>
</div>
    )





}



  return (
    <div>
      <div>
          <button onClick={addHandler} className={styles.add}>Add Text expenders</button>
      </div>

      <div>
          {expand && renderExpands()}
      </div>



    </div>
  )
}

export default TextExpanders
