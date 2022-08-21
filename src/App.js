import React, {useState} from 'react'
import './App.css'
import Map from './components/map/Map'

function App() {

  const [org, setOrg] = useState(null)

  const urlParams = new URLSearchParams(window.location.search)
  const orgId = urlParams.get('organization_id')
  fetch(`https://frontend-challenge.dev-cluster.voltus.co/facilities/${orgId}`)
    .then(result => result.json())
    .then(result => setOrg(result))
  
  if (!org) return (
    <div>
      loading
    </div>
  )
  return (
    <div className="app">
      <header>
        {org.name}
      </header>
      <div className="body">
        <div className="sidepanel">
          side panel
        </div>
        <Map facilities={org.facilities} />
      </div>
    </div>
  )
}

export default App
