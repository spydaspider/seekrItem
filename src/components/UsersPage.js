import styles from './UsersPage.module.css';


const UsersPage=()=> {
  const users = [
    { id: 1, name: "Name", email: "Email", role: "Role", status: "Status", action: "Activate" },
    { id: 2, name: "Name", email: "Email", role: "Role", status: "Status", action: "Suspend" },
    { id: 3, name: "Name", email: "Email", role: "Role", status: "Status", action: "Activate" },
    { id: 4, name: "Name", email: "Email", role: "Role", status: "Status", action: "Activate" },
    
  ];

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
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button
                  className={`${styles.actionBtn} ${
                    user.action === "Suspend" ? styles.suspend : styles.activate
                  }`}
                >
                  {user.action}
                </button>
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