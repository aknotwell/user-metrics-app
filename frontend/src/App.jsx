import './App.css'
import UserTable from './UserTable'
function App() {

  return (
   <div >
      <h1>User Metrics</h1>
      <h2><strong>Note:</strong> Filtering by name or date is case sensitive.</h2>
      <UserTable/>
      <h2>All users highlighted in red either haven't changed their password in over a year or haven't accessed their account in 90+ days.</h2>
    </div>

  )
}

export default App
