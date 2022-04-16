import React from 'react'
import  styles from "./Login.module.css"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <div className={styles.containerpart}> 
        <div className={styles.loginpart}>
<div>
    <p>Log in</p>
</div>
<div>

<div className={styles.label1}>
      <label className={styles.text}>Username</label>
      </div>
<div className={styles.inputlogincontainer}>
    <PersonIcon/>
        <input type="text" placeholder="Username" className={styles.input2}/>
    </div>
    </div>

    <div>
      <div className={styles.label1}>
      <label className={styles.text}>Password</label>
      </div>
    <div className={styles.inputlogincontainer}>
    <LockIcon/>
        <input type="text" placeholder="Password" className={styles.input2}/>
    </div>
    </div>

    <div className={styles.forgot}>
        <p>Forgot password</p>
    </div>
    <div>
        <button className={styles.btn1}>Log in</button>
    </div>



        </div>
      
    </div>
  )
}

export default Login
