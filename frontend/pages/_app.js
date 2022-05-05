
import Home from '.'
// import Register from './register'
import Login from "../pages/login"
// import TextExpanders from '../components/Textexpernders/Text'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


 

  return (
  <div>  
    <Component {...pageProps} />
        {/* <Register/>    */}
    {/* <Login/>  */}
     {/* <Nav/> 
     <LeftPanel/>
     <MainPanel
     />
     <RightPanel/> */}
     {/* <Home/> */}
   

    </div>


  )
}

export default MyApp
