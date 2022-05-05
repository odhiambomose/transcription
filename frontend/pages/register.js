import React,{useState} from 'react'
import  styles from "../components/Register/Register.module.css";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
// import back from "../../public/images/back.jpg"
import Link from 'next/link'

const Register = () => {

  const[formData,setFormData]=useState({
    username:"",
    email:"",
    password:"",

})
const [message, setMessage] = useState("");
const [color,setColor]=useState("")
const [backgroundColor,setBackgroundColor]=useState("")

function handleRegister(e){
    

  const url = "https://polar-crag-34351.herokuapp.com/api/auth/register"

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
      setColor("#fff")
      setBackgroundColor("red")
     

     } else {
         setMessage("succesfully registered you can login")
         setColor("#fff")
         setBackgroundColor("#6CB4A5")
         
return data
     }
    
 })
 .catch(error=>{
      console.log(error)
 })
 




}










  return (

    <div className={styles.flexregister}>
    <div className={styles.register}>
    <div className={styles.align}>
        <h2 className={styles.heading}>Create Account</h2>
        <p className={styles.para}>Get started with transcription</p>
    </div>
    <p className="success" className="error" style={{color:color,backgroundColor:backgroundColor}} className={styles.textcolor}>{message} </p>

    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Username</label>
      </div>
    <div className={styles.inputcontainer}>
    <PersonIcon className={styles.iconregister}/>
        <input type="text" placeholder="Username" className={styles.input1} onChange={(e)=>setFormData({...formData,username:e.target.value})} required/>
    </div>
    </div>
    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Email</label>
      </div>
    <div className={styles.inputcontainer}>
    <EmailIcon className={styles.iconregister}/>
        <input type="text" placeholder="Email" className={styles.input1} onChange={(e)=>setFormData({...formData,email:e.target.value})} required/>
    </div>
    </div>

    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Password</label>
      </div>
    <div className={styles.inputcontainer}>
    <LockIcon className={styles.iconregister}/>
        <input type="text" placeholder="Password" className={styles.input1} onChange={(e)=>setFormData({...formData,password:e.target.value})} required/>
    </div>
    </div>
<div className={styles.signupcontainer}>
  <button className={styles.signup} onClick={handleRegister} disabled ={formData.username==="" || formData.email==="" || formData.password===""} >Signup</button>
  <p>Already have an account<span className={styles.span}><Link href="/login">login</Link></span></p>
</div>

    </div>
    <div className={styles.background}>
      <h2 className={styles.texting}>Welcome to our transcription site where we provide affordable tools for Transcribers</h2>
    </div>
    </div>
  )
}

export default Register

