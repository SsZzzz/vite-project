import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useMemo, useState } from 'react';
import { Layer, Popup, Source } from 'react-map-gl';
import {
  getMultiBearings,
  getMultiBezierRouteData,
  getMultiPointData,
  pointLayerProps,
  routeLayerProps,
} from './utils';

export default ({ startEndList, step = 1000, offset = 6 }) => {
  const [pointData, setPointData] = useState(getMultiPointData());

  const [routeData, bearingList] = useMemo(() => {
    const routeData = getMultiBezierRouteData(startEndList, step, offset);
    const bearingList = getMultiBearings(routeData);
    return [routeData, bearingList];
  }, [startEndList]);

  useEffect(() => {
    animate(0);
  }, []);

  function animate(i) {
    if (i < step + 1) {
      setPointData(getMultiPointData(routeData, bearingList, i));
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
      {startEndList.map((obj, i) => {
        if (!obj.isShowPopup) return null;
        const [longitude, latitude] =
          routeData.features[i].geometry.coordinates[Math.floor(step / 2)];
        return (
          <Popup
            key={i}
            longitude={longitude}
            latitude={latitude}
            anchor="bottom"
          >
            {obj.text}
          </Popup>
        );
      })}
    </>
  );
};
