import styles from './Dashboard.module.css';
const Dashboard = () =>{
        return(
            <div className={styles.dashboardContainer}>
                <div className={styles.topBoard}>
                    <div className={styles.overview}>
                        <div className={styles.leftFlex}>
                            <h4>Seekr Items<br></br>Dashboard Overview</h4>
                            <div className={styles.downFlex}>
                                <div>Items Claimed</div>
                            </div>
                        </div>
                    
                    </div>
                    <div className={styles.pendingClaims}>

                    </div>
                </div>
                <div className={styles.buttonCards}>
                   <div className={styles.claims}>

                   </div>
                   <div className={styles.recentItems}>

                   </div>
                </div>
            </div>
        )
}
export default Dashboard;