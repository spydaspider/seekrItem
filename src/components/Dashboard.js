import styles from './Dashboard.module.css';
import hugeIcon from '../images/hugeIcon.png';
import person from '../images/person.svg';
import arrowRight from '../images/arrow-right.svg';
import { useAuthContext } from '../hooks/UseAuthContext.js';
import { useItemsContext } from '../hooks/UseItemContext.js';
import { useClaimsContext } from '../hooks/UseClaimsContext.js';
import { useState, useEffect} from 'react';
const Dashboard = () =>{
    const { user } = useAuthContext();
    const {items, dispatch} = useItemsContext();
    const {claims, dispatch: claimsDispatch} = useClaimsContext();
    const [error, setError] = useState();
    const [approvedClaims, setApprovedClaims] = useState();
    const [pendingClaims, setPendingClaims] = useState([]);
    //use effect for items
    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await fetch('/api/items/',{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json();
            if(response.ok)
            {
            
                dispatch({type: 'SET_ITEMS', payload: json});
                
            }
            if(!response.ok)
            {
                setError(json.error);
            }
        }
        if(user)
        {
            fetchItems();
        }

    },[dispatch, user])

    //Use Effect for claims

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
                //check for approved
                let approved = 0;
                let pending = [];
                
                for(let i = 0; i < json.length; i++)
                {
                    if(json[i].status === "approved")
                    {
                         approved = approved + 1;
                        
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
            <div className={styles.dashboardContainer}>
                <div className={styles.topBoard}>
                     <div className={styles.overview}>
      <div className={styles.leftFlex}>
        <h4>
          Seekr Items <br /> Dashboard Overview
        </h4>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.claimed}`}></span>
            <p>Items claimed</p>
          </div>

          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.lost}`}></span>
            <p>Total lost items</p>
          </div>

          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.found}`}></span>
            <p>Total items found</p>
          </div>
        </div>
      </div>

      <div className={styles.rightFlex}>
        <div className={`${styles.bubble} ${styles.bubbleClaims}`}>
         { claims && <span className={styles.bigNumber}>{claims.length}</span>}
          <span className={styles.label}>claims</span>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleLost}`}>
         {items && <span className={styles.bigNumber}>{items.length}</span>}
          <span className={styles.label}>Items</span>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleFound}`}>
         {approvedClaims && <span className={styles.bigNumber}>{approvedClaims}</span> }
          <span className={styles.label}>found</span>
        </div>
      </div>
    </div>
                    <div className={styles.pendingClaims}>
                      <h4>Pending Claims</h4>
                    {pendingClaims && pendingClaims.map(
                        (pendingClaim)=>(
                             <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>{pendingClaim.itemTitle}<br></br><span className={styles.black}>{pendingClaim.itemTitle}</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                        )
                    )}
                      <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                         <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                         <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                         <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                         <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                         <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                         <div className={styles.pendingCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <button>pending</button>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonCards}>
                   <div className={styles.claims}>
                    <div className={styles.activeClaimsCard}>
                        <div className={styles.activeClaimsContent}>
                         <div className={styles.activeClaimsTitle}><h4>Active Claims</h4><p>Number of claims in real time</p></div>
                          <div className={styles.viewDetails}>
                          
                            <p>View Details</p>
                            <div className={styles.hugeIconContainer}>
                              <img src={hugeIcon} alt="huge icon"/>

                            
                          </div>
                    </div>
                    </div>
                    <div className={styles.numberCard}>
                        {claims&&<div>{claims.length}</div>}
                    </div>
                    </div>
                   
                    <div className={styles.activeClaimsCard}>
                        <div className={styles.activeClaimsContent}>
                         <div className={styles.activeClaimsTitle}><h4>Resolved Claims</h4><p>Number of claims in real time</p></div>
                          <div className={styles.viewDetails}>
                          
                            <p>View Details</p>
                            <div className={styles.hugeIconContainer}>
                              <img src={hugeIcon} alt="huge icon"/>

                            
                          </div>
                    </div>
                    </div>
                    <div className={styles.numberCard}>
                        {approvedClaims&&<div>{approvedClaims}</div>}
                    </div>
                    </div>
                   </div>
                   <div className={styles.recentItems}>
                        <h4>Recent Items</h4>
                        {items && items.map((item)=>(
                               <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>{item.title}<br></br><span className={styles.black}>{item.description}</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: {item.status}</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                        ))}
                       
                        </div>
                   
                </div>
            </div>
        )
}
export default Dashboard;