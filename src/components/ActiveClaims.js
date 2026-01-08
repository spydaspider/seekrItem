import styles from './AllClaims.module.css';
import wallet from '../images/item.svg';
import { useAuthContext } from '../hooks/UseAuthContext';
import { useClaimsContext } from '../hooks/UseClaimsContext';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const ActiveClaims = () => {
  const { user } = useAuthContext();
  const { claims, dispatch: claimsDispatch } = useClaimsContext();
   const [approvingId, setApprovingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingClaims = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/admin/claims/pending', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.error || 'Failed to fetch claims');
        }

        claimsDispatch({
          type: 'SET_CLAIMS',
          payload: json,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchPendingClaims();
  }, [user, claimsDispatch]);

  const approveClaim = async (claimId) => {
    // Instant UI update
    claimsDispatch({
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

      // Sync with backend version
      claimsDispatch({
        type: 'APPROVE_CLAIM',
        payload: json
      });

    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!claims || claims.length === 0)
    return <p className={styles.empty}>No active claims found.</p>;

  return (
    <div className={styles.claimsCardContainer}>
      {claims.map((claim) => (
        <div key={claim._id} className={styles.claimsCard}>
                            <img src={claim.imageUrl} alt="item"/>

          <div className={styles.claimsCardContent}>
            {/* LEFT CONTENT */}
            <div className={styles.leftContent}>
              <div className={styles.claimer}>
                <h5 className={styles.itemName}>{claim.itemTitle}</h5>
                <p>Claimed by {claim.claimant.username}</p>
              </div>

              <div className={styles.claimDescContainer}>
                <h5 className={styles.claimDesc}>Claim Description</h5>
                <p>{claim.description || 'No description provided.'}</p>
              </div>

              <div className={styles.proofContainer}>
                <h5 className={styles.ownershipProof}>Proof of Ownership</h5>
                <p>{claim.message}</p>
              </div>

              <div className={styles.date}>
                <p>
                  Submitted on{' '}
                  {new Date(claim.createdAt).toLocaleDateString()}
                </p>
              </div>

              {claim.status === 'pending' && (
                <div className={styles.downButtons}>
                  <button
                    className={styles.approveBtn}
                    disabled={!claim.answerMatches || approvingId === claim.id}
                    onClick={async ()=> {
                        setApprovingId(claim._id);
                        await approveClaim(claim._id);
                        setApprovingId(null);
                    }}
                  >
                    {approvingId === claim._id ? 'Approving...': 'Approve'}
                  </button>
                </div>
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

export default ActiveClaims;
