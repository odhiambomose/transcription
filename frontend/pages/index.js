import Head from 'next/head';
import React,{useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import Speakers from '../components/Speakers/Speakers'
import LeftPanel from '../components/LeftPanel/LeftPanel'
import MainPanel from '../components/MainPanel/MainPanel'
import RightPanel from '../components/RightPanel/RightPanel'
import Nav from '../components/Nav/Nav'
import Loader from '../Loader/Loader';
import Footer from '../components/Footer/Footer';







export default function Home() {
  const [expand,setExpand]=useState(false)
  const [theTranscript, setTheTranscript] = useState([])
  const [textExpander, setTextExpander] = useState({
      shortword:"",
      longword:""
  })
  const [storeexpanders,setStoreexpanders]=useState([])

  const [transcript,setTranscript]=useState("")
  
  const [darktheme,setDarkTheme]=useState(true)

  const [theme,setTheme]=useState({
        primaryColor:"#1f1d36",
        secondaryColor:"#302d4e",
        text:"#fff"

  })
  
  const[trackSpeakers,setTrackSpeakers]=useState("Speaker1");
const[storeCurrentTranscript,setStoreCurrentTranscript]=useState([])

const [element,setElement]=useState([{element:"",show:false}]);




useEffect(()=>{
  const data = localStorage.getItem("transcript");
  
  setStoreCurrentTranscript([...storeCurrentTranscript, {trackSpeakers:trackSpeakers,transcript:data}])

},[])





  return (
    <div>
    
    <div className={styles.container} style={{backgroundColor:theme.primaryColor}} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



<Nav transcript={transcript} darktheme={darktheme} setDarkTheme={setDarkTheme} theme={theme} setTheme={setTheme} element={element} setElement={setElement}/>
          <div className={styles.flex}>
        
      <LeftPanel  expand={expand} setExpand={setExpand}
         textExpander={textExpander} setTextExpander={setTextExpander} 
         storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders}
         theme={theme} setTheme={setTheme}
         trackSpeakers={trackSpeakers} setTrackSpeakers={setTrackSpeakers}
         theTranscript={theTranscript} setTheTranscript={setTheTranscript}
         element={element} setElement={setElement}
         />
      <MainPanel expand={expand} setExpand={setExpand} transcript={transcript} setTranscript={setTranscript}
         textExpander={textExpander} setTextExpander={setTextExpander} 
         storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders}
         theme={theme} setTheme={setTheme}
         trackSpeakers={trackSpeakers} setTrackSpeakers={setTrackSpeakers}
         theTranscript={theTranscript} setTheTranscript={setTheTranscript}
         element={element} setElement={setElement}
         />
      <RightPanel expand={expand} setExpand={setExpand}
         textExpander={textExpander} setTextExpander={setTextExpander} 
         storeexpanders={storeexpanders} setStoreexpanders={setStoreexpanders}
         theme={theme} setTheme={setTheme}
         trackSpeakers={trackSpeakers} setTrackSpeakers={setTrackSpeakers}
         theTranscript={theTranscript} setTheTranscript={setTheTranscript}
         />
      </div>   
        
         {/* <Loader/>  */}
         

    </div>
    {/* <Footer/> */}
    </div>
    
   
  )
}
