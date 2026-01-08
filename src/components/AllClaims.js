import styles from './AllClaims.module.css';
import wallet from '../images/item.svg';
import { useAuthContext } from '../hooks/UseAuthContext';
import { useClaimsContext } from '../hooks/UseClaimsContext';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const AllClaims = () => {
  const { user } = useAuthContext();
  const { claims, dispatch } = useClaimsContext();

  const [loading, setLoading] = useState(true);
  const [approvingId, setApprovingId] = useState(null);
  const [error, setError] = useState(null);

  //Fetch claims
  useEffect(() => {
    const fetchClaims = async () => {
      try {
        setLoading(true);

        const res = await fetch('/api/admin/claims', {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });

        const json = await res.json();

        if (!res.ok) throw new Error(json.error);

        dispatch({ type: 'SET_CLAIMS', payload: json });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchClaims();
  }, [user, dispatch]);

  //Approve claims
  const approveClaim = async (claimId) => {
    // Instant UI update
    dispatch({
      type: 'APPROVE_CLAIM',
      payload: { _id: claimId, status: 'approved' }
    });

    try {
      const res = await fetch(`/api/admin/claims/${claimId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'approved' })
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error);

      //  Sync with backend version
      dispatch({
        type: 'APPROVE_CLAIM',
        payload: json
      });

    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className={styles.claimsCardContainer}>
      {error && <p className={styles.error}>{error}</p>}

      {claims.map((claim) => (
        <div key={claim._id} className={styles.claimsCard}>
                            <img src={claim.imageUrl} alt="item"/>

          <div className={styles.claimsCardContent}>
            {/* LEFT */}
            <div className={styles.leftContent}>
              <div className={styles.claimer}>
                <h5 className={styles.itemName}>{claim.itemTitle}</h5>
                <p>Claimed by {claim.claimant.username}</p>
              </div>

              <div className={styles.claimDescContainer}>
                <h5>Claim Description</h5>
                <p>This is my backpack. I lost it yesterday at the library.</p>
              </div>

              <div className={styles.proofContainer}>
                <h5>Proof of Ownership</h5>
                <p>{claim.message}</p>
              </div>

              <p className={styles.date}>
                Submitted on {new Date(claim.createdAt).toLocaleDateString()}
              </p>

              {claim.status === 'pending' && (
                <button
                  className={styles.approveBtn}
                  disabled={
                    !claim.answerMatches ||
                    approvingId === claim._id
                  }
                  onClick={async () => {
                    setApprovingId(claim._id);
                    await approveClaim(claim._id);
                    setApprovingId(null);
                  }}
                >
                  {approvingId === claim._id ? 'Approving…' : 'Approve'}
                </button>
              )}
            </div>

            {/* STATUS BADGE */}
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
        </div>
      ))}
    </div>
  );
};

export default AllClaims;
