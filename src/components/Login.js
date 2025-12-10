import styles from './Login.module.css';
import seekrIcon from '../images/seekIcon.png';
const Login = () =>{
  return(
    <div className={styles.background}>
       <div className={styles.container}>
          <div className={styles.innerLayer}>
            
            <div className={styles.innerLeft}>
                <div className={styles.imageContainer}>
               <img className={styles.iconLogin} src={seekrIcon} alt="seekIcon"/>
               </div>
               <div className={styles.loginDesc}>
                <h4>Log in into your account</h4>
                <p>Enter your email to log in for this app</p>
               </div>
               <input type="text" placeholder="email@domain.com"/>
               <input type="password" placeholder="********"/>
               <button className={styles.loginButton}>Log in</button>
            </div>
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