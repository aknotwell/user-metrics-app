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

    return {users, loading}

}