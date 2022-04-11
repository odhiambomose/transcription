// import React from 'react'
import styles from "./Textbox.module.css"
import React, { useCallback, useEffect, useRef } from 'react'
import Textarea from 'react-expanding-textarea'
const Textbox=()=> {

    
        const textareaRef = useRef(null)
      
        const handleChange = useCallback(e => {
          console.log('Changed value to: ', e.target.value)
        }, [])
      
        useEffect(() => {
          textareaRef.current.focus()
        }, [])

  return (
    <div>
  
      <Textarea
        className={styles.textarea}
        
        id="my-textarea"
        maxLength="3000"
        name="pet[notes]"
        onChange={handleChange}
        ref={textareaRef}
        
      />
    </div>
  )
}

export default Textbox
 