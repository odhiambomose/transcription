import React,{useState} from 'react'
import  styles from "./Login.module.css"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {

    const[formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
    
    })

    const [message, setMessage] = useState("");
const [color,setColor]=useState("")


function handleRegister(e){
    

    const url = "https://polar-crag-34351.herokuapp.com/api/auth/login"
  
       const options={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
        }
        return  fetch(url,options)
        .then(res=>res.json())
   .then(data=>{
       if( data.code===11000){
          
        setMessage("User already registered")
        setColor("#f00")
       
  
       } else {
           setMessage("succesfully Loged in")
           setColor("#6CB4A5")
           
  return data
       }
      
   })
  //  .catch(error=>{
  //      console.log(error.response.status)
  //  })
   
  
  
  
  
  }


  return (
    <div className={styles.containerpart}> 
        <div className={styles.loginpart}>
<div>
    <p className={styles.forgot1}>Log in</p>
</div>
<p style={{color:color}}>{message}</p>
<div>

<div className={styles.label1}>
      <label className={styles.text}>Username</label>
      </div>
<div className={styles.inputlogincontainer}>
    <PersonIcon/>
        <input type="text" placeholder="Username" className={styles.input2} onChange={(e)=>setFormData({...formData,username:e.target.value})} required/>
    </div>
    </div>

    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Password</label>
      </div>
    <div className={styles.inputlogincontainer}>
    <LockIcon/>
        <input type="text" placeholder="Password" className={styles.input2} onChange={(e)=>setFormData({...formData,password:e.target.value})} required/>
    </div>
    </div>

    <div className={styles.forgot}>
        <p>Forgot password</p>
    </div>
    <div>
        <button className={styles.btn1} onClick={handleRegister} >Log in</button>
    </div>



        </div>
      
    </div>
  )
}

export default Login
