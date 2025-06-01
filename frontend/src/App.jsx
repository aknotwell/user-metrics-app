import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFetcher from './UserFetcher'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Metrics</h1>
      <UserFetcher /> {/* 👈 This renders your fetch component */}
    </div>
  )
}

export default App
