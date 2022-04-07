import React, { useState } from 'react'
import styles from "./Speaker.module.css"

function Speakers() {
  const [options, setOptions] = useState(false);
  const [textor, setTextor] = useState("")
  const [description, setDescription] = useState("")
  const [arrayspeakers, setArrayspeakers] = useState([])



  const [addspeaker, setAddspeaker] = useState("");

  function handlePress() {
    return setOptions(() => {
      return !options

    })
  }

  function renderOptions() {
    return (
      <div className={styles.options}>
        <p>{addspeaker}</p>
        <p>{description}</p>
        <p>{arrayspeakers}</p>
        <input type="text" placeholder="new speaker"
          onChange={(e) => setTextor(e.target.value)}
          on
          className={styles.inputarea}
        />
        <button onClick={addChange} className={styles.btnspeaker}>Add Speaker</button>
         <input type="text" placeholder="Speaker description" className={styles.inputtest}

          onChange={(e) => setDescription(e.target.value)}
        /> 
        <div>

        </div>
        <div>
          <h3>Select color</h3>
          <input type="color"

            onChange={(e) => console.log(e.target.value)}
            className={styles.color}
          />
        </div>
      </div>
    )
  }

  function addChange() {
   return [ setAddspeaker(() => {
      return textor


    }),

     setArrayspeakers(()=>{
      // return arrayspeakers

    return [...arrayspeakers,textor]

    })

  ]

  }

  





  return (
    <div>
      <div>
        <button onClick={handlePress} className={styles.btnspeaker1}>Speaker1</button>
      </div>

      {options && renderOptions()}
    </div>
  )
}

export default Speakers
