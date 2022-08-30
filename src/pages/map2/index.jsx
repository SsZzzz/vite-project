import FlyLine from '@/components/FlyLine';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

export default () => {
  return (
    <Map
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mendia/cl6hn8tcp000f14mgtmvzbuj5"
      initialViewState={{ longitude: 120, latitude: 30.2, zoom: 8 }}
      mapboxAccessToken="pk.eyJ1IjoibWVuZGlhIiwiYSI6ImNra2Zja2duaTAzMmoydnAxZW1qdHN4c2oifQ.YIgSVnH9h0g5vfLAM-MNhQ"
    >
      <Marker longitude={121} latitude={30} color="#2855f0" />
      <Marker longitude={119} latitude={30} color="#2855f0" />
      <FlyLine
        startEndList={[
          {
            start: [121, 30],
            end: [119, 30],
            isShowPopup: true,
            text: 123,
          },
          {
            start: [120, 30],
            end: [119, 31],
            isShowPopup: true,
            text: 456,
          },
        ]}
      />
    </Map>
  );
};
