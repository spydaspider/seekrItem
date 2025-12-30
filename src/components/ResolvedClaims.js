import styles from './AllClaims.module.css';
import wallet from '../images/item.svg';
import { useAuthContext } from  '../hooks/UseAuthContext.js';
import { useClaimsContext } from '../hooks/UseClaimsContext.js';
import { useState, useEffect} from 'react';
import Spinner from './Spinner.js';
const ResolvedClaims = () =>{
 const { user } = useAuthContext();
    const {claims, dispatch: claimsDispatch} = useClaimsContext();
    const [error,setError] = useState();
    const [loading, setLoading] = useState(true);

     useEffect(()=>{
        const fetchClaims = async()=>{
            setLoading(true);
            try{
            const response = await fetch('/api/admin/claims/approved',{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json();
            if(response.ok)
            {
                
                claimsDispatch({type: 'SET_CLAIMS', payload: json});
                console.log(json);
                //check for approved
                let approved = [];
                let pending = [];
                
                for(let i = 0; i < json.length; i++)
                {
                    if(json[i].status === "approved")
                    {
                         approved.push(json[i]);
                        
                    }
                    else if(json[i].status === "pending")
                    {
                             pending.push(json[i]);
                    }
                }
                
                
                
                
            }
            if(!response.ok)
            {
                setError(json.error);
            }
        }
        catch(error){
            setError(error.message);
        }
        finally{
            setLoading(false);
        }
        }
        if(user)
        {
            fetchClaims();
        }

    },[claimsDispatch, user])
    if(loading) return <Spinner/>
    return(
         <div className={styles.claimsCardContainer}>
           { claims.map((claim)=>(
            <div className={styles.claimsCard}>
                <img src={wallet} alt="wallet"/>
                <div className={styles.claimsCardContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.claimer}>
                    <h5 className={styles.itemName}>{claim.itemTitle}</h5>
                    <p>Claimed by {claim.claimant.username}</p> 
                       </div>
                        <div className={styles.claimDescContainer}>
                    <h5 className={styles.claimDesc}>Claim Description</h5>
                    <p>This is my backpack. I lost it yesterday at the library.</p>
                       </div>
                       <div className={styles.proofContainer}>
                    <h5 className={styles.ownershipProof}>Proof of Ownership</h5>
                    <p>{claim.message}</p>
                       </div>
                       <div className={styles.date}>
                        <p>Submitted on {claim.createdAt}</p>
                       </div>
                       
                    </div>
                  
                </div>
                 <div className={styles.statusBadge}>
  {claim.status === 'approved' ? (
    <button className={styles.approved}>Approved</button>
  ) : claim.answerMatches ? (
    <button className={styles.verified}>Verified</button>
  ) : (
    <button className={styles.pending}>Pending</button>
  )}
</div>
            </div>
            
           ))}
             
           
            
        </div>
    )
}
export default ResolvedClaims;