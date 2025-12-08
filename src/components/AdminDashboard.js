import styles from './AdminDashboard.module.css';
import { useState } from 'react';

import first from '../images/Vector.png';
import second from '../images/second.png';
import third from '../images/Group.png';
import fourth from '../images/team.png';

import bell from '../images/bell.png';
import settings from '../images/settings.png';
import logout from '../images/logout.png';

import Dashboard from './Dashboard';
import seekIcon from '../images/seekIcon.png';
import Navbar from './Navbar';

const AdminDashboard = () => {

  // Group 1 (first four badges)
  const group1 = [
    { name: 'Dashboard', icon: first },
    { name: 'second', icon: second },
    { name: 'third', icon: third },
    { name: 'fourth', icon: fourth },
  ];

  // Group 2 (next two)
  const group2 = [
    { name: 'bell', icon: bell },
    { name: 'settings', icon: settings },
  ];

  // Group 3 (logout alone)
  const group3 = [
    { name: 'logout', icon: logout },
  ];

  const [selectedBadge, setSelectedBadge] = useState("Dashboard");
  const [showDashboard, setShowDashboard] = useState(true);

  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);

    if (badge === "Dashboard") {
      setShowDashboard(true);
    }
  };

  return (
    <div className={styles.container}>
            <Navbar/>
            <div className={styles.left}>
          
      
          <div className={styles.iconContainer}>
            <div className={styles.seekIcon}>
              <img src={seekIcon} alt="Seek Icon" />
            </div>
          </div>

          
          <div className={styles.group}>
            <div className={styles.insideGroup1}>

            
            {group1.map(({ name, icon }) => (
              <button
                key={name}
                className={`${styles.badge} ${selectedBadge === name ? styles.selected : ''}`}
                onClick={() => handleBadgeClick(name)}
              >
                <img src={icon} alt="" className={styles.badgeIcon} />
              </button>
            ))}
            </div>
          </div>

        
          <div className={styles.group}>
            <div className={styles.insideGroup1}>
            {group2.map(({ name, icon }) => (
              <button
                key={name}
                className={`${styles.badge} ${selectedBadge === name ? styles.selected : ''}`}
                onClick={() => handleBadgeClick(name)}
              >
                <img src={icon} alt="" className={styles.badgeIcon} />
              </button>
            ))}
            </div>
          </div>

          
          <div className={styles.logoutGroup}>
            {group3.map(({ name, icon }) => (
              <button
                key={name}
                className={`${styles.badge} ${selectedBadge === name ? styles.selected : ''}`}
                onClick={() => handleBadgeClick(name)}
              >
                <img src={icon} alt="" className={styles.badgeIcon} />
              </button>
            ))}
          </div>
          </div>

      <div className={styles.middle}>
  
                {showDashboard && <Dashboard />}


        </div>

        

      </div>
    
  );
};

export default AdminDashboard;
