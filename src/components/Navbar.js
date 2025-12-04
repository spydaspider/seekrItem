import React,{ Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
/* import homeIcon from '../assets/icons/home.png';
 */const Navbar = () =>{
/*       const { user } = useAuthContext();
 */
    
    const navigate = useNavigate();
/*     const {logout} = useLogout();
 */    
     
    return(
        <header>
            <div className={styles.navContainer}>
                <NavLink to="/" className={styles.chowRate}>
                    <div className ={styles.seekIcon}><img src = "assets/images/seekicon.png"/></div>
                    <div className={styles.amanda}>
                        <h3 className={styles.amandaH3}>Hi,Amanda!<br></br><span className={styles.amandaSmall}>Lets take a look at Seekr's activities today</span></h3>
                
                    </div>
                    
                    
                </NavLink>

                <nav className={styles.mainNav}>
                 {/*  <NavLink className={({isActive}) =>(isActive ? styles.activeLink: styles.white)} to ="/"><img alt ="icon"/></NavLink>
                  <NavLink className={({isActive})=>(isActive ? styles.activeLink : styles.white)} to ="/studentDashBoard">StudentDash</NavLink>
                  <NavLink className={({isActive})=>(isActive ? styles.activeLink: styles.white)} to = "/contact">Contact Us</NavLink>

 */}             
                <div className={styles.rightLinks}>
                   <input type="search" placeholder = "Search for all lost or found items"/> 
                   <button>log out</button>
                </div>
                  

                </nav>
               
               
{/*                 {user ? <button className={styles.logout}onClick={handleLogout}>logout</button>:<Fragment><NavLink to="/register" className={styles.white1}>Signup</NavLink><NavLink to="/login" className={styles.white1}>login</NavLink></Fragment>}
 */}                
                
            </div>
        </header>
    )
}
export default Navbar;