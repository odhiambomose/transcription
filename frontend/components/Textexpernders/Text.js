import React from 'react'
import styles from "./Text.module.css"

const Text = ({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders}) => {
    
  

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
    <div>
    <label>Expand</label>
 <input type="text" placeholder="Enter shortform" className={styles.expand} onChange={(e)=>setTextExpander({...textExpander, shortword:e.target.value})}/>
 </div>
 <div>
 <label>To</label>
 <input type="text" placeholder="Expand" className={styles.expand} onChange={(e)=>setTextExpander({...textExpander,longword:e.target.value})}/>
 </div>
 <button onClick={addExpander}>Add expander</button>
</div>
    )





}



  return (
    <div>
      <div>
          <button onClick={addHandler}>Add Text expenders</button>
      </div>

      <div>
          {expand && renderExpands()}
      </div>



    </div>
  )
}

export default Text
