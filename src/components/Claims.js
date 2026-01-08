import styles from './Claims.module.css';
import { useAuthContext } from '../hooks/UseAuthContext';
import { useClaimsContext } from '../hooks/UseClaimsContext';
import { useEffect, useState } from 'react';
import ClaimsList from './ClaimsList';

const Claims = () => {
  const { user } = useAuthContext();
  const { claims, dispatch } = useClaimsContext();
  const [selectedBadge, setSelectedBadge] = useState('All');

  useEffect(() => {
    const fetchClaims = async () => {
      const res = await fetch('/api/admin/claims', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: 'SET_CLAIMS', payload: json });
        console.log(json);
      }
    };

    if (user) {
      fetchClaims();
    }
  }, [user, dispatch]);

  
  const filteredClaims = () => {
    if (selectedBadge === 'Active') {
      return claims.filter(c => c.status === 'pending');
    }
    if (selectedBadge === 'Resolved') {
      return claims.filter(c => c.status === 'approved');
    }
    return claims;
  };

  return (
    <div className={styles.claimsContainer}>
      <input
        className={styles.claimsSearch}
        type="search"
        placeholder="Search by clicking one of the statuses below"
      />

      <div className={styles.catButtons}>
        {['All', 'Active', 'Resolved'].map(name => (
          <button
            key={name}
            className={`${styles.badge} ${selectedBadge === name ? styles.selected : ''}`}
            onClick={() => setSelectedBadge(name)}
          >
            {name}
          </button>
        ))}
      </div>

      
      <ClaimsList claims={filteredClaims()} />
    </div>
  );
};

export default Claims;
