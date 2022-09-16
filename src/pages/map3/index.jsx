import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl';
import mapStyle from './mapStyle';

export default () => {
  return (
    <Map
      style={{ width: '100%', height: '100%' }}
      mapStyle={mapStyle}
      initialViewState={{ longitude: 120, latitude: 30.2, zoom: 8 }}
      mapboxAccessToken="pk.eyJ1IjoibWVuZGlhIiwiYSI6ImNra2Zja2duaTAzMmoydnAxZW1qdHN4c2oifQ.YIgSVnH9h0g5vfLAM-MNhQ"
    ></Map>
  );
};
