import * as turf from '@turf/turf';

export const routeLayerProps = {
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
  type: 'symbol',
  layout: {
    'icon-image': 'car',
    'icon-rotate': ['get', 'bearing'],
    'icon-allow-overlap': true,
    'icon-ignore-placement': true,
  },
};

// start是起点的经纬度.如[120,30],end是终点的经纬度,step是要在起点和终点中分隔出多少个点,越大动画越慢,offset是偏移的大小,越大贝塞尔曲线曲率越小
export function getBezierRouteData(start, end, step = 1000, offset = 6) {
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
  let bezierRouteDistance = 0;
  const bezierRouteCoordinates = bezierRouteData.geometry.coordinates;
  for (let i = 0; i < bezierRouteCoordinates.length - 1; i++) {
    const from = turf.point(bezierRouteCoordinates[i]);
    const to = turf.point(bezierRouteCoordinates[i + 1]);
    bezierRouteDistance += turf.distance(from, to);
  }
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

  const routeData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: routeCoordinates,
        },
      },
    ],
  };

  return routeData;
}

export function getBearingList(routeData) {
  const coordinates = routeData.features[0].geometry.coordinates;
  const bearingList = [];
  for (let i = 0; i < coordinates.length - 1; i++) {
    bearingList.push(
      turf.bearing(turf.point(coordinates[i + 1]), turf.point(coordinates[i])),
    );
  }
  bearingList.push(bearingList[bearingList.length - 1]);

  return bearingList;
}

export function getPointData(coordinates = [], properties = {}) {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties,
        geometry: {
          type: 'Point',
          coordinates,
        },
      },
    ],
  };
}
