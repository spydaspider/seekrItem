import styles from './Claims.module.css';
import wallet from '../images/item.svg';
const Claims =()=>{
    return(
        <div className={styles.claimsContainer}>
             <input className={styles.claimsSearch} type="search" placeholder="Search by clicking one of the statuses below"/>
        <div className={styles.claimsCategoryButtons}>
            <button>All</button>
            <button>lost</button>
            <button>found</button>
            <button>active</button>
            <button>Resolved</button>
        </div>
        <div className={styles.claimsCardContainer}>
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
        </div>
    )
}
export default Claims;