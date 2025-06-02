import useUsers from './fetchUsers'
import {useState} from 'react'


export default function UserTable() {
    const { users, loading } = useUsers()

    const cell = "px-4 py-2 text-sm text-white border border-white/10"
    const cell_highlighted = "px-4 py-2 text-sm text-white bg-red-500/30 border border-white/10"
    const header_style = "px-4 py-2 text-left text-sm font-semibold text-white border border-white/10"
     const headers =  ['Name','Date Created', 'Date Password Changed','Days Since Password Changed', 'Last Access Date','Days Since Last Access', 'MFA Enabled',]

    // Start filtering 
     const [filters, setFilters] = useState ({
        name: '',
    create_date: '',
    password_changed_date: '',
    days_since_pwd_change: '',
    last_access_date: '',
    days_since_last_access: '',
    mfa_enabled: ''
    })

    const keys = ['name', 'create_date', 'password_changed_date', 'days_since_pwd_change', 'last_access_date', 'days_since_last_access', 'mfa_enabled']

    function handleFilterChange (key, value) {
        return setFilters(prev => ({...prev, [key]: value}))
    }

    const filteredUsers = users.filter( u => keys.every(k =>{
        const filterVal = filters[k] // what filter value to check by, example filters[name] -> "Foo"
        if(!filterVal) return true // If filter is empty, don't apply a filter, return.
        const userVal = (u[k] ?? '').toString() 
        if(k === 'mfa_enabled'){
            const isEnabled = u.mfa_enabled === true
            return filterVal ? isEnabled : !isEnabled // returning !isEnabled handles the "No" case.
        }
            return userVal.includes(filterVal)
    }))    

   



    if (loading) return <p className="text-gray-300 p-4">Loading users, please wait...</p>

    
    
    return (
        <div className="overflow-x-auto p-4">
        <table className="min-w-full table-auto border-collapse">
            <thead className="bg-[#1e1e1e] bg-opacity-60">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className= {header_style}
            >
              {h}
            </th>
          ))}
        </tr>
        <tr>
          {keys.map((key,i) => (
            <th
                key= {i}
                className={header_style}>
                { key === 'mfa_enabled' ? (<select
                    value= {filters[key]}
                    onChange= {e => handleFilterChange(key, e.target.value)}
                    className= {header_style}
                >
                <option value="">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                ) : (
                <input
                    type="text"
                    value={filters[key]}
                    onChange={e => handleFilterChange(key,e.target.value)}
                    className={header_style}
                    placeholder={"Filter by: " + headers[i]}
                />
            )}
            </th>
          ))}




        </tr>
      </thead>
        <tbody>
          {filteredUsers.map((u, index) => {
            const cell_color = u.days_since_pwd_change > 365 || u.days_since_last_access >= 90 ? cell_highlighted: cell
            return <tr key = {index}
              className={
                index % 2 === 0 ? 'bg-[#242424]/80' : 'bg-[#1e1e1e]/80'
               }
            >    
              <td className={cell_color} >{u.name}</td>
              <td className={cell_color}>{u.create_date}</td>
              <td className={cell_color}>{u.password_changed_date}</td>
              <td className={cell_color}>{u.days_since_pwd_change}</td>
              <td className={cell_color}>{u.last_access_date}</td>
              <td className={cell_color}>{u.days_since_last_access}</td>
              <td className={cell_color}>
                {u.mfa_enabled ? 'Yes' : 'No'}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
