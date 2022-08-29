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

export default ({ id, start, end }) => {
  const [pointData, setPointData] = useState(getPointData());

  const [routeData, coordinates, bearingList] = useMemo(() => {
    const routeData = getBezierRouteData(start, end);
    const coordinates = routeData.features[0].geometry.coordinates;
    const bearingList = getBearingList(routeData);
    return [routeData, coordinates, bearingList];
  }, [start, end]);

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
      <Source id={`routeData-${id}`} type="geojson" data={routeData}>
        <Layer {...routeLayerProps} id={`route-${id}`} />
      </Source>
      <Source id={`pointData-${id}`} type="geojson" data={pointData}>
        <Layer {...pointLayerProps} id={`point-${id}`} />
      </Source>
    </>
  );
};
