import useUsers from './useUsers'

export default function UserTable() {
    const { users, loading } = useUsers()
    const cell = "px-4 py-2 text-sm text-white border border-white/10"
    const headers =  ['Name','Date Created', 'Date Password Changed','Days Since Password Changed', 'Last Access Date','Days Since Last Access', 'MFA Enabled',]
    if (loading) return <p className="text-gray-300 p-4">Loading users, please wait...</p>

    return (
        <div className="overflow-x-auto p-4">
        <table className="min-w-full table-auto border-collapse">
            <thead className="bg-[#1e1e1e] bg-opacity-60">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className="px-4 py-2 text-left text-sm font-semibold text-white border border-white/10"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key = {index}
              className={
                index % 2 === 0 ? 'bg-[#242424]/80' : 'bg-[#1e1e1e]/80'
               }
            >    
              <td className={cell} >{u.name}</td>
              <td className={cell}>{u.create_date}</td>
              <td className={cell}>{u.password_changed_date}</td>
              <td className={cell}>{u.days_since_pwd_change}</td>
              <td className={cell}>{u.last_access_date}</td>
              <td className={cell}>{u.days_since_last_access}</td>
              <td className={cell}>
                {u.mfa_enabled ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
