import React, {useEffect, useState, useRef} from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import css from './Map.module.css'
import maplibregl from 'maplibre-gl'

function Map({facilities}) {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [markers] = useState([])
  
    useEffect(() => {
      if (map.current) return
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=pa4lsVWPtH81wuZVGMw1',
      })
  
      map.current.addControl(new maplibregl.NavigationControl({showCompass: false}), 'top-left')

      let maxLng = facilities[0].coord[1]
      let maxLat = facilities[0].coord[0]
      let minLng = facilities[0].coord[1]
      let minLat = facilities[0].coord[0]

      facilities.forEach(facility => {
        if (facility.coord[1] > maxLng) maxLng = facility.coord[1]
        else if (facility.coord[1] < minLng) minLng = facility.coord[1]

        if (facility.coord[0] > maxLat) maxLat = facility.coord[0]
        else if (facility.coord[0] < minLat) minLat = facility.coord[0]

        const marker = document.createElement('span')
        marker.className = css.marker
        markers.push(
          new maplibregl.Marker(marker)
            .setLngLat([facility.coord[1], facility.coord[0]])
            .addTo(map.current)
          )
      })

      map.current.fitBounds([[minLng, minLat], [maxLng, maxLat]], {
        padding: 200
      })
    })

    
    return (
      <div ref={mapContainer} className={css.map} />
    )
}

export default Map
