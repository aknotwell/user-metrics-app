import {useState, useEffect} from 'react'

export default function UserFetcher(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/api/users')

        .then(res => res.json())
        .then(data=> {
            setUsers(data)
            setLoading(false)
        }).catch(err => {
            console.error("Fetch failed", err)
            setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading user data...</p>
    return <div>
      <h2>Fetched Users</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre> {/* 👈 inspect raw data here */}
    </div>

}