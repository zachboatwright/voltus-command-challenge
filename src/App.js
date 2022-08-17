import React from 'react'
import './App.css'

function App() {

  const facility = {
    name: "Singleton Corp",
    id:0,
    facilities:[
      {
        name:"Atlanta",
        coord:[33.749,-84.388],
        id:1
      },
      {
        name:"Memphis",
        coord:[	35.117,-89.971],
        id:2
      },
      {
        name:"Boulder",
        coord:[40.014,-105.270],
        id:3
      }
    ]
  }
  
  return (
    <div className="app">
      <header>
        {facility.name}
      </header>
      <div className="body">
        <div className="sidepanel">
          side panel
        </div>
        <div className="map">
          map
        </div>
      </div>
    </div>
  )
}

export default App
