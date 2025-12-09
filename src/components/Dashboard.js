import styles from './Dashboard.module.css';
import hugeIcon from '../images/hugeIcon.png';
import person from '../images/person.svg';
import arrowRight from '../images/arrow-right.svg';
const Dashboard = () =>{
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
          <span className={styles.bigNumber}>12</span>
          <span className={styles.label}>claims</span>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleLost}`}>
          <span className={styles.bigNumber}>8</span>
          <span className={styles.label}>Items</span>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleFound}`}>
          <span className={styles.bigNumber}>7</span>
          <span className={styles.label}>found</span>
        </div>
      </div>
    </div>
                    <div className={styles.pendingClaims}>
                      <h4>Pending Claims</h4>
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
                        <div>8</div>
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
                        <div>11</div>
                    </div>
                    </div>
                   </div>
                   <div className={styles.recentItems}>
                        <h4>Recent Items</h4>
                        <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                         <div className={styles.recentCard}>
                            <div className={styles.personCard}>
                                <div className={styles.personContainer}><img src={person} alt="person"/></div>
                                <div className={styles.personParagraph}><p>Wallet<br></br><span className={styles.black}>Black Leather Wallet</span></p></div>
                            </div>
                            <div className={styles.itemStatus}>item Status: found</div>
                            <div className={styles.arrowContainer}><img className={styles.arrowRight} src={arrowRight} alt= "arrow right"/></div>
                        </div>
                   </div>
                   
                </div>
            </div>
        )
}
export default Dashboard;