import 'mapbox-gl/dist/mapbox-gl.css';
import { useCallback, useRef, useState } from 'react';
import Map, { Layer, Marker, Popup, Source } from 'react-map-gl';
import roadGeoJSON from './roadGeoJSON';

const layerProps = {
  id: 'route',
  type: 'line',
  layout: {
    'line-join': 'round',
    'line-cap': 'round',
  },
  paint: {
    'line-color': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      '#297DFA',
      '#65B82B',
    ],
    'line-width': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      4,
      2,
    ],
    'line-offset': 2,
  },
};

let hoveredStateId = null;

export default () => {
  const mapRef = useRef();
  const [popupData, setPopupData] = useState(null);

  const onMapLoad = useCallback(() => {
    mapRef.current.on('mouseover', 'route', (e) => {
      hoveredStateId = e.features[0].id;
      mapRef.current.setFeatureState(
        { source: 'routeData', id: hoveredStateId },
        { hover: true },
      );
    });
    mapRef.current.on('mouseleave', 'route', () => {
      if (hoveredStateId === null) return;
      mapRef.current.setFeatureState(
        { source: 'routeData', id: hoveredStateId },
        { hover: false },
      );
      hoveredStateId = null;
    });
  }, []);

  return (
    <Map
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mendia/cld9klj6z006201p4h9kjdlgv"
      ref={mapRef}
      initialViewState={{ longitude: 120, latitude: 30.2, zoom: 8 }}
      mapboxAccessToken="pk.eyJ1IjoibWVuZGlhIiwiYSI6ImNra2Zja2duaTAzMmoydnAxZW1qdHN4c2oifQ.YIgSVnH9h0g5vfLAM-MNhQ"
      onLoad={onMapLoad}
    >
      <Source id="routeData" type="geojson" data={roadGeoJSON}>
        <Layer {...layerProps} />
      </Source>
      <Marker
        longitude={120}
        latitude={30.2}
        color="#2855f0"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          e.originalEvent.stopPropagation();
          setPopupData({ longitude: 120, latitude: 30.2 });
        }}
      />
      {popupData && (
        <Popup
          anchor="top"
          longitude={popupData.longitude}
          latitude={popupData.latitude}
          onClose={() => setPopupData(null)}
        >
          <div>popupInfo</div>
        </Popup>
      )}
    </Map>
  );
};
