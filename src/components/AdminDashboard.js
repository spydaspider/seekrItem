import styles from './AdminDashboard.module.css';
import { useState } from 'react';



import {ReactComponent as homeIcon} from '../images/home.svg';
import {ReactComponent as lostAndFoundIcon} from '../images/lostandfound.svg';
import {ReactComponent as claimsIcon} from '../images/claims.svg';
import {ReactComponent as usersIcon} from '../images/usersPage.svg';


import bell from '../images/bell.png';
import settings from '../images/settings.png';
import logout from '../images/logout.png';

import Dashboard from './Dashboard';
import seekIcon from '../images/seekIcon.png';
import Navbar from './Navbar';
import LostAndFoundBoard from './LostAndFoundBoard';
import Claims from './Claims';
import UsersPage from './UsersPage';


const AdminDashboard = () => {

  // Group 1 (first four badges)
  const group1 = [
    { name: 'Dashboard', Icon: homeIcon },
    { name: 'second', Icon: lostAndFoundIcon },
    { name: 'third', Icon:  claimsIcon },
    { name: 'fourth', Icon: usersIcon },
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
  const [showLostAndFoundBoard, setShowLostAndFoundBoard] = useState(false);
  const [showClaims, setShowClaims] = useState(false);
  const [showUsersPage,setShowUsersPage] = useState(false);

  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);

    if (badge === "Dashboard") {
      setShowDashboard(true);
      setShowLostAndFoundBoard(false);
      setShowClaims(false);
      setShowUsersPage(false);
      

    }
    else if(badge === "second")
    {
      setShowLostAndFoundBoard(true);
      setShowDashboard(false);
      setShowClaims(false);
      setShowUsersPage(false);

    }
    else if(badge === "third")
    {
      setShowLostAndFoundBoard(false);
      setShowDashboard(false);
      setShowClaims(true);
      setShowUsersPage(false);

      

    }
    else if(badge === "fourth")
    {
      setShowLostAndFoundBoard(false);
      setShowDashboard(false);
      setShowClaims(false);
      setShowUsersPage(true);

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

            
            {group1.map(({ name, Icon }) => (
              <button
                key={name}
                className={`${styles.badge} ${selectedBadge === name ? styles.selected : ''}`}
                onClick={() => handleBadgeClick(name)}
              >
                <Icon src={Icon} alt="" className={styles.badgeIcon} />
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
                {showLostAndFoundBoard && <LostAndFoundBoard/>}
                {showClaims && <Claims/>}
                {showUsersPage && <UsersPage/>}


        </div>

        

      </div>
    
  );
};

export default AdminDashboard;
