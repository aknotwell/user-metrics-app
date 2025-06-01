import useUsers from './useUsers'
export default function UserTable(){
    const {users, loading} = useUsers()

    if (loading) return <p>Loading users, please wait...</p>
    return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date Created</th>
          <th>Date Password Changed</th>
          <th>Days Since Password Changed</th>
          <th>Last Access Date</th>
          <th>Days Since Last Access</th>
          <th>MFA Enabled</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, i) => (
          <tr key={i}>
            <td>{u.name}</td>
            <td>{u.create_date}</td>
            <td>{u.password_changed_date}</td>
            <td>{u.days_since_pwd_change}</td>
            <td>{u.last_access_date}</td>
            <td>{u.days_since_last_access}</td>
            <td>{u.mfa_enabled ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
