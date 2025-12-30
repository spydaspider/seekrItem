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
          {users.map((user) => (
            <tr key={user.id} className={styles.row}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              {user.isActive === true&&<td>Active</td>}
              {user.isActive === false && <td>suspended</td>}
              <td>
                {user.isActive === true && <button className={styles.suspend}>suspend</button>}
                {user.isActive === false && <button className={styles.activate}>activate</button>}
               
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