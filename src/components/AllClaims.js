import styles from './AllClaims.module.css';
import wallet from '../images/item.svg';
import { useAuthContext } from  '../hooks/UseAuthContext.js';
import { useClaimsContext } from '../hooks/UseClaimsContext.js';
import { useState, useEffect} from 'react';
const AllClaims = () =>{
 const { user } = useAuthContext();
    const {claims, dispatch: claimsDispatch} = useClaimsContext();
    const [error,setError] = useState();
    const [approvedClaims, setApprovedClaims] = useState([]);
    const [pendingClaims, setPendingClaims] = useState([]);

     useEffect(()=>{
        const fetchClaims = async()=>{
            const response = await fetch('/api/admin/claims',{
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
                setApprovedClaims(approved);
                setPendingClaims(pending);
                
                
                
            }
            if(!response.ok)
            {
                setError(json.error);
            }
        }
        if(user)
        {
            fetchClaims();
        }

    },[claimsDispatch, user])
    return(
         <div className={styles.claimsCardContainer}>
           {claims.map((claim)=>(
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
                       {claim.status === 'pending' && (<>
                       <div className={styles.downButtons}>
                        <button>View details</button>
                        <button>Approve</button>
                        <button>Reject</button>
                       </div>
                         </>)
                         }
                    </div>
                  { claim.status === 'pending' && (<>
                   <button>Pending</button>
                   </> )}
                   { claim.status === 'approved' && (<>
                      <button>Approved</button>
                   </>)} 
                </div>
            </div>
            
           ))}
             <div className={styles.claimsCard}>
                <img src={wallet} alt="wallet"/>
                <div className={styles.claimsCardContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.claimer}>
                    <h5 className={styles.itemName}>Black leather Wallet</h5>
                    <p>Claimed by Mike Davis</p>
                       </div>
                        <div className={styles.claimDescContainer}>
                    <h5 className={styles.claimDesc}>Claim Description</h5>
                    <p>This is my backpack. I lost it yesterday at the library.</p>
                       </div>
                       <div className={styles.proofContainer}>
                    <h5 className={styles.ownershipProof}>Proof of Ownership</h5>
                    <p>The laptop inside has my name engraved on it. Serial number: ABC123458</p>
                       </div>
                       <div className={styles.date}>
                        <p>Submitted on 11/28/2024, 10:00:00AM</p>
                       </div>
                       <div className={styles.downButtons}>
                        <button>View details</button>
                        <button>Approve</button>
                        <button>Reject</button>
                       </div>

                    </div>
                    <button>pending</button>
                </div>
            </div>
           
             <div className={styles.claimsCard}>
                <img src={wallet} alt="wallet"/>
                <div className={styles.claimsCardContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.claimer}>
                    <h5 className={styles.itemName}>Black leather Wallet</h5>
                    <p>Claimed by Mike Davis</p>
                       </div>
                        <div className={styles.claimDescContainer}>
                    <h5 className={styles.claimDesc}>Claim Description</h5>
                    <p>This is my backpack. I lost it yesterday at the library.</p>
                       </div>
                       <div className={styles.proofContainer}>
                    <h5 className={styles.ownershipProof}>Proof of Ownership</h5>
                    <p>The laptop inside has my name engraved on it. Serial number: ABC123458</p>
                       </div>
                       <div className={styles.date}>
                        <p>Submitted on 11/28/2024, 10:00:00AM</p>
                       </div>
                       <div className={styles.downButtons}>
                        <button>View details</button>
                        <button>Approve</button>
                        <button>Reject</button>
                       </div>

                    </div>
                    <button>pending</button>
                </div>
            </div>
            
        </div>
    )
}
export default AllClaims;