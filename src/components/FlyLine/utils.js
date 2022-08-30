import * as turf from '@turf/turf';

export const routeLayerProps = {
  id: 'route',
  type: 'line',
  layout: {
    'line-join': 'round',
    'line-cap': 'round',
  },
  paint: {
    'line-color': '#297DFA',
    'line-width': 2,
  },
};

export const pointLayerProps = {
  id: 'point',
  type: 'symbol',
  layout: {
    'icon-image': 'car',
    'icon-rotate': ['get', 'bearing'],
    'icon-allow-overlap': true,
    'icon-ignore-placement': true,
  },
};

export function getMultiBezierRouteData(startEndList, step, offset) {
  const routeData = {
    type: 'FeatureCollection',
    features: [],
  };
  for (const { start, end } of startEndList) {
    routeData.features.push(getBezierRouteData(start, end, step, offset));
  }
  return routeData;
}

// start是起点的经纬度.如[120,30],end是终点的经纬度,step是要在起点和终点中分隔出多少个点,越大动画越慢,offset是偏移的大小,越大贝塞尔曲线曲率越小
function getBezierRouteData(start, end, step, offset) {
  const originLineString = turf.lineString([start, end]);
  const from = turf.point(start);
  const to = turf.point(end);
  // 起点到终点的距离
  const distance = turf.distance(from, to);
  // 偏移的线
  const offsetLineString = turf.lineOffset(originLineString, distance / offset);
  // 偏移的线的中点
  const center = turf.center(offsetLineString);
  // 得到起点,偏移的中点,和终点的geojson
  const bezierLineString = turf.lineString([
    start,
    center.geometry.coordinates,
    end,
  ]);
  // 根据起点,偏移的中点,和终点,得到贝塞尔曲线,但这个曲线不能直接用,因为每个点间隔的距离不一样,动画会一顿一顿的
  const bezierRouteData = turf.bezierSpline(bezierLineString);
  // 得到这条曲线的长度
  const bezierRouteDistance = turf.length(bezierRouteData);
  // 通过turf.along,使贝塞尔曲线中每个点间隔的距离长度都一致
  const routeCoordinates = [];
  for (
    let currentDistance = 0;
    currentDistance < bezierRouteDistance;
    currentDistance += bezierRouteDistance / step
  ) {
    const segment = turf.along(bezierRouteData, currentDistance);
    routeCoordinates.push(segment.geometry.coordinates);
  }
  // 由于小数精度问题,最后一个点加不上去,手动再加一下
  routeCoordinates.push(end);

  return {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: routeCoordinates,
    },
  };
}

export function getMultiBearings(routeData) {
  const bearingsList = [];
  for (const feature of routeData.features) {
    const coordinates = feature.geometry.coordinates;
    bearingsList.push(getBearings(coordinates));
  }
  return bearingsList;
}

function getBearings(coordinates) {
  const bearings = [];
  for (let i = 0; i < coordinates.length - 1; i++) {
    bearings.push(
      turf.bearing(turf.point(coordinates[i + 1]), turf.point(coordinates[i])),
    );
  }
  bearings.push(bearings[bearings.length - 1]);

  return bearings;
}

export function getMultiPointData(routeData, bearingsList, i) {
  const pointData = {
    type: 'FeatureCollection',
    features: [],
  };
  if (!routeData || !bearingsList || i === undefined) {
    return pointData;
  }
  for (let k = 0; k < routeData.features.length; k++) {
    const coordinates = routeData.features[k].geometry.coordinates;
    const bearings = bearingsList[k];
    const featureObj = {
      type: 'Feature',
      properties: { bearing: bearings[i] },
      geometry: {
        type: 'Point',
        coordinates: coordinates[i],
      },
    };
    pointData.features.push(featureObj);
  }
  return pointData;
}
