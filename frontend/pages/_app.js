
import Home from '.'
import Login from '../components/login/Login'
import Nav from '../components/nav/Nav'
import Register from '../components/register/Register'
import Speakers from '../components/Speakers/Speakers'
import Text from '../components/Textexpernders/Text'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


 

  return (
  <div>  
    <Component {...pageProps} />
      <Register/> 
    {/* <Login/> */}
     {/* <Nav/> */}
     {/* <Home/> */}
   

    </div>


  )
}

export default MyApp
