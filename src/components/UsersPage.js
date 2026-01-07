import styles from './UsersPage.module.css';
import { useAuthContext } from '../hooks/UseAuthContext.js';
import { useUsersContext } from '../hooks/UseUsersContext.js';
import { useState, useEffect } from 'react';
import Spinner from './Spinner.js';

const UsersPage=()=> {
  const { user } = useAuthContext();
  const { users, dispatch} = useUsersContext();
  const [error,setError] = useState();
  const [loading, setLoading] = useState(true);
  const [togglingId, setTogglingId] = useState(null);
  const toggleUserStatus = async (userId, isActive) => {

  dispatch({
    type: 'TOGGLE_USER_STATUS',
    payload: { userId, isActive: !isActive }
  });

  setTogglingId(userId);

  try {
    const endpoint = isActive
      ? `/api/admin/users/${userId}/deactivate`
      : `/api/admin/users/${userId}/reactivate`;

    const res = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error);

  
    dispatch({
      type: 'TOGGLE_USER_STATUS',
      payload: { userId, isActive: json.isActive }
    });

  } catch (err) {
  
    dispatch({
      type: 'TOGGLE_USER_STATUS',
      payload: { userId, isActive }
    });

    setError(err.message);
  } finally {
    setTogglingId(null);
  }
};

  
    useEffect(()=>{
        const fetchUsers = async()=>{
            setLoading(true);
            try{
            const response = await fetch('/api/users/users',{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json();
            if(response.ok)
            {
                
                dispatch({type: 'SET_USERS', payload: json});
                console.log(json);
          
               
                
                
            }
            if(!response.ok)
            {
                setError(json.error);
            }
          }
            catch(error){
              setError(error.message);
            }
            finally{
              setLoading(false);
            }
        }
        if(user)
        {
            fetchUsers();
        }

    },[dispatch, user])
    if(loading) return <Spinner/>;
  return (
    <div className={styles.usersPageContainer}>
        <input className={styles.usersSearch} type="search" placeholder="Search Users"/>
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {users?.map((u) => (
    <tr key={u._id} className={styles.row}>
      <td>{u.username}</td>
      <td>{u.email}</td>
      <td>{u.role}</td>
      <td>{u.isActive ? 'Active' : 'Suspended'}</td>

      {/* ACTION */}
      <td>
        {u.isActive ? (
          <button
            className={styles.suspend}
            disabled={togglingId === u._id}
            onClick={() => toggleUserStatus(u._id, true)}
          >
            {togglingId === u._id ? 'Activating…' : 'Suspend'}
          </button>
        ) : (
          <button
            className={styles.suspend}
            disabled={togglingId === u._id}
            onClick={() => toggleUserStatus(u._id, false)}
          >
            {togglingId === u._id ? 'Suspending…' : 'Activate'}
          </button>
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
    </div>
  );
}
export default UsersPage;