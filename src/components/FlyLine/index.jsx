import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useMemo, useState } from 'react';
import { Layer, Source } from 'react-map-gl';
import {
  getBearingList,
  getBezierRouteData,
  getPointData,
  pointLayerProps,
  routeLayerProps,
} from './utils';

export default ({ start, end }) => {
  const [pointData, setPointData] = useState(getPointData());

  const [routeData, bearingList] = useMemo(() => {
    const routeData = getBezierRouteData(start, end);
    const bearingList = getBearingList(routeData);
    return [routeData, bearingList];
  }, [start, end]);
  const coordinates = routeData.features[0].geometry.coordinates;

  useEffect(() => {
    animate(0);
  }, []);

  function animate(i) {
    if (i < coordinates.length) {
      setPointData(getPointData(coordinates[i], { bearing: bearingList[i] }));
      requestAnimationFrame(() => animate(i + 1));
    } else {
      requestAnimationFrame(() => animate(0));
    }
  }

  return (
    <>
      <Source id="routeData" type="geojson" data={routeData}>
        <Layer {...routeLayerProps} />
      </Source>
      <Source id="pointData" type="geojson" data={pointData}>
        <Layer {...pointLayerProps} />
      </Source>
    </>
  );
};
