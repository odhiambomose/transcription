import React,{useState} from 'react'
import  styles from "./Register.module.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Register = () => {

  const[formData,setFormData]=useState({
    username:"",
    email:"",
    password:"",

})
const [message, setMessage] = useState("");
const [color,setColor]=useState("")

function handleRegister(e){
    

  const url = "https://470c-105-231-200-83.ngrok.io/api/auth/register"

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
         setMessage("succesfully registered you can login")
         setColor("#65C18C")
         
return data
     }
    
 })
//  .catch(error=>{
//      console.log(error.response.status)
//  })
 




}










  return (
    <div className={styles.register}>
    <div>
        <h2 className={styles.heading}>Create Account</h2>
        <p className={styles.para}>Get started with transcription</p>
    </div>
    <p className="success" className="error" style={{color:color}}>{message} </p>

    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Username</label>
      </div>
    <div className={styles.inputcontainer}>
    <PersonIcon/>
        <input type="text" placeholder="Username" className={styles.input1} onChange={(e)=>setFormData({...formData,username:e.target.value})}/>
    </div>
    </div>
    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Email</label>
      </div>
    <div className={styles.inputcontainer}>
    <EmailIcon/>
        <input type="text" placeholder="Email" className={styles.input1} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
    </div>
    </div>

    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Password</label>
      </div>
    <div className={styles.inputcontainer}>
    <LockIcon/>
        <input type="text" placeholder="Username" className={styles.input1} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
    </div>
    </div>
<div className={styles.signupcontainer}>
  <button className={styles.signup} onClick={handleRegister}>Signup</button>
</div>

    </div>
  )
}

export default Register

