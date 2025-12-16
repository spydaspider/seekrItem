import styles from './Login.module.css';
import seekrIcon from '../images/seekIcon.png';
import Spinner from './Spinner';
import { useState } from 'react';
import { useLogin } from '../hooks/UseLogin';

const Login = () =>{
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, error, isLoading } = useLogin();
   const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email, password);
   }
   if(isLoading) return <Spinner size="large"/>;
  return(
    <div className={styles.background}>
       <div className={styles.container}>
          <div className={styles.innerLayer}>
            <form className={styles.innerForm} onSubmit = {handleSubmit}>
            <div className={styles.innerLeft}>
                <div className={styles.imageContainer}>
               <img className={styles.iconLogin} src={seekrIcon} alt="seekIcon"/>
               </div>
               <div className={styles.loginDesc}>
                <h4>Log in into your account</h4>
                <p>Enter your email to log in for this app</p>
               </div>
               <input type="text" placeholder="email@domain.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <input type="password" placeholder="********" value={password} onChange={(e)=> setPassword(e.target.value)}/>
               <button className={styles.loginButton}>Log in</button>
               {error && <div className="error">{error}</div>}
            </div>
            </form>
            <div className={styles.innerRight}>
                 <h2>Admin Account</h2>
                 <p>We use your decisions to keep Seekr accurate
and trustworthy. Claims, reports, and item updates 
will adapt based on the way you manage active and 
pending cases.</p>
            </div>
            </div>
          </div>
       </div>
    
  )
}
export default Login;