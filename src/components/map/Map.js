import React, {useEffect, useState, useRef} from 'react'
import 'maplibre-gl/dist/maplibre-gl.css';
import css from './Map.module.css'
import maplibregl from 'maplibre-gl'

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-89.971);
    const [lat] = useState(35.117);
    const [zoom] = useState(5);
  
    useEffect(() => {
      if (map.current) return;
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://demotiles.maplibre.org/style.json',
        center: [lng, lat],
        zoom
      });
  
      map.current.addControl(new maplibregl.NavigationControl({showCompass: false}), 'top-left')
    });

    
    return (
      <div ref={mapContainer} className={css.map} />
    )
}

export default Map
