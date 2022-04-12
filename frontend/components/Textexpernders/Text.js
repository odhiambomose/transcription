import React, { useState } from 'react'
import styles from "./Text.module.css"

const Text = () => {
const [expand,setExpand]=useState(false)
const [textExpander, setTextExpander] = useState({
    shortword:"",
    longword:""
})
const [storeexpernders,setStoreexpernders]=useState([])

function addExpernder(){
    console.log(storeexpernders)
    setStoreexpernders([...storeexpernders,textExpander])

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
 <button onClick={addExpernder}>Add expernder</button>
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
