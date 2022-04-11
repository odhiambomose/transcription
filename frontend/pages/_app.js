import Login from '../components/login/Login'
import Nav from '../components/nav/Nav'
import Register from '../components/register/Register'
import Speakers from '../components/Speakers/Speakers'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>  
    <Component {...pageProps} />
     {/* <Register/>  */}
    {/* <Login/> */}
     <Nav/> 
    <Speakers/>

    </div>


  )
}

export default MyApp
