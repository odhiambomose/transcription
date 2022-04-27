import React, { useState, useEffect } from 'react'
import Textbox from '../Textbox/Textbox';
import Player from '../uploadfiles/Uploadfiles';
import Uploadfiles from '../uploadfiles/Uploadfiles';
import Text from '../TextExpanders/TextExpanders';
import styles from "./Speaker.module.css"

function Speakers({expand,setExpand,textExpander,setTextExpander,storeexpanders,setStoreexpanders,theme,setTheme,trackSpeakers,setTrackSpeakers,trackTranscript,setTrackTranscript,element,setElement}) {
  const [options, setOptions] = useState(false);
  const [textor, setTextor] = useState("")
  const [description, setDescription] = useState("")
  const [arrayspeakers, setArrayspeakers] = useState([])
  const [color,setColor]=useState("#000")

useEffect(()=>{

setTrackSpeakers([...trackSpeakers, "Speaker 1"])


 },[])

 useEffect(()=>{
const data = localStorage.getItem("speakers");
setArrayspeakers(()=>JSON.parse(data))
 },[])

 useEffect(()=>{
  localStorage.setItem('speakers', JSON.stringify(arrayspeakers));
 }, [arrayspeakers])


  

  function handlePress() {
    
    

    const speaker = {
      name:textor,
      description:description,
      color:color
    }
    

   setArrayspeakers(()=>[...arrayspeakers,speaker])

  

  
  }


  function renderOptions() {
    return (
      <div className={styles.options}>
         {
           arrayspeakers.map(speaker=>{
             return (
               <div key={speaker.id}>
                
                 {<h4>{speaker.name}</h4>}
                 {<p>{speaker.description}</p>}
               </div>
             )
           })
         }
        <input type="text" placeholder="new speaker"
          onChange={(e) => setTextor(e.target.value)}
          on
          className={styles.inputarea}
        />
        
         <input type="text" placeholder="Speaker description" className={styles.inputtest}

          onChange={(e) => setDescription(e.target.value)}
        /> 
        <div>

        </div>
        <div>
          <h3>Select color</h3>
          <input type="color"

            onChange={(e) => setColor(e.target.value)}
            className={styles.color}
          />
          <button onClick={handlePress} className={styles.btnspeaker}>Add Speaker</button>
        </div>
       
      </div>
    )
  }

  
  
  

  return (
    <div>

      {
        element.map(item=>{
          return(
            <div>
            <button onClick={()=>setOptions(() => !options)} className={styles.btnspeaker1}>Speaker1</button>
            {options && renderOptions()}
</div>
          )
        })
      }
      <div>
      {/* {console.log(options)} */}
    <div>
      <div>
      </div>
      
    </div>
    </div>

    


    

    <div>

  
    </div>



    </div>



  )
}

export default Speakers
