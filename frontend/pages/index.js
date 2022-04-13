import Head from 'next/head'
import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import Speakers from '../components/Speakers/Speakers'

export default function Home() {
  const [expand,setExpand]=useState(false)

  const [textExpander, setTextExpander] = useState({
      shortword:"",
      longword:""
  })
  const [storeexpanders,setStoreexpanders]=useState([])
  
  



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
