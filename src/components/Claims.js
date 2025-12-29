import styles from './Claims.module.css';
import wallet from '../images/item.svg';
import { useAuthContext } from  '../hooks/UseAuthContext.js';
import { useClaimsContext } from '../hooks/UseClaimsContext.js';
import { useState, useEffect} from 'react';
import ActiveClaims from './ActiveClaims.js';
import AllClaims from './AllClaims.js';
import ResolvedClaims from './ResolvedClaims.js';
const Claims =()=>{
    const { user } = useAuthContext();
    const {claims, dispatch: claimsDispatch} = useClaimsContext();
    const [error,setError] = useState();
    const  categoryButton = [
        {name: 'All'},
        {name: 'Active'},
        {name: 'Resolved'}
        
    ]
            const [selectedBadge, setSelectedBadge] = useState("All");
            const [showAll, setShowAll] = useState(true);
            const [showActive, setShowActive] = useState(false);
            const [showResolved, setShowResolved] = useState(false);

            const handleBadgeClick = (badge)=>{
                setSelectedBadge(badge);
                if(badge === "All")
                {
                    setShowAll(true);
                    setShowResolved(false);
                    setShowActive(false);



                }
                else if(badge === "Active")
                {
                    setShowActive(true);
                    setShowAll(false);
                    setShowResolved(false);



                }
                else if(badge === "Resolved")
                {
                    setShowResolved(true);
                    setShowActive(false);
                    setShowAll(false);
                }
            }

    

    return(
        <div className={styles.claimsContainer}>
             <input className={styles.claimsSearch} type="search" placeholder="Search by clicking one of the statuses below"/>
             <div className={styles.catButtons}>
                 {categoryButton.map(
                ({name})=>(
                   <button key={name} className={`${styles.badge} ${selectedBadge === name ? styles.selected : ''}`}
                   onClick={()=>handleBadgeClick(name)}
                   >{name}</button>

                )
             )}
             </div>
              <div className={styles.claimsCover}>
                                {showAll && <AllClaims/>}
                                {showActive && <ActiveClaims/>}
                                {showResolved && <ResolvedClaims/>}
                       </div>
             
       
             
            
       
        </div>
    )
}
export default Claims;