// 20220916165356
// http://localhost:9000/styles/streets/style.json

export default {
  bearing: 0,
  center: [0, 0],
  glyphs: 'http://localhost:9000/fonts/{fontstack}/{range}.pbf',
  id: 'streets',
  layers: [
    {
      id: 'background',
      layout: {
        visibility: 'visible',
      },
      paint: {
        'background-color': {
          stops: [
            [6, 'rgba(252, 247, 229, 1)'],
            [10, 'rgba(252, 247, 229, 1)'],
            [14, 'rgba(246, 241, 229, 1)'],
            [15, 'rgba(246, 241, 229, 1)'],
          ],
        },
      },
      type: 'background',
    },
    {
      filter: ['all', ['==', 'class', 'crop']],
      id: 'landcover_cropland',
      layout: {
        visibility: 'visible',
      },
      paint: {
        'fill-color': 'rgba(243, 235, 195, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'grass']],
      id: 'landcover_grassland',
      paint: {
        'fill-color': 'rgba(226, 236, 197, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'scrub']],
      id: 'landcover_scrubland',
      paint: {
        'fill-color': 'rgba(199, 230, 179, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'tree']],
      id: 'landcover_treeland',
      paint: {
        'fill-color': 'rgba(190, 222, 173, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'forest']],
      id: 'landcover_forestland',
      paint: {
        'fill-color': 'rgba(171, 217, 170, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'snow']],
      id: 'landcover_snowland',
      layout: {
        visibility: 'visible',
      },
      paint: {
        'fill-color': 'hsl(0, 0%, 100%)',
        'fill-opacity': {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      type: 'fill',
    },
    {
      filter: ['all'],
      id: 'park_outline',
      layout: {
        visibility: 'visible',
      },
      paint: {
        'line-color': 'rgba(228, 241, 215, 1)',
        'line-dasharray': [1, 1.5],
        'line-opacity': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'park',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['in', 'class', 'residential', 'suburbs', 'neighbourhood'],
      ],
      id: 'landuse_residential',
      layout: {
        visibility: 'visible',
      },
      maxzoom: 24,
      metadata: {},
      paint: {
        'fill-color': {
          base: 1,
          stops: [
            [9, 'rgba(233, 227, 210, 0.80)'],
            [12, 'rgba(233, 227, 210, 0.55)'],
            [16, 'rgba(233, 227, 210, 0.35)'],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'wood']],
      id: 'landcover_wood',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-antialias': false,
        'fill-color': 'hsla(98, 61%, 72%, 0.7)',
        'fill-opacity': 0.4,
      },
      source: 'openmaptiles',
      'source-layer': 'landcover',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'class', 'grass']],
      id: 'landcover_grass',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-antialias': false,
        'fill-color': 'rgba(224, 232, 201, 1)',
        'fill-opacity': 0.3,
      },
      source: 'openmaptiles',
      'source-layer': 'landcover',
      type: 'fill',
    },
    {
      filter: ['==', 'class', 'cemetery'],
      id: 'landuse_cemetery',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'hsl(75, 37%, 81%)',
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['==', 'class', 'hospital'],
      id: 'landuse_hospital',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgba(249, 225, 220, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['==', 'class', 'school'],
      id: 'landuse_school',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgb(236,238,204)',
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['all', ['in', 'class', 'stadium', 'pitch', 'track']],
      id: 'landuse_stadium',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgb(236,238,204)',
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['all', ['in', 'class', 'garages']],
      id: 'landuse_garages',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgba(236, 236, 236, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['all', ['in', 'class', 'dam']],
      id: 'landuse_dam',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgba(209, 212, 190, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'landuse',
      type: 'fill',
    },
    {
      filter: ['all', ['==', 'brunnel', 'tunnel']],
      id: 'waterway_tunnel',
      layout: {
        'line-cap': 'round',
        visibility: 'visible',
      },
      minzoom: 14,
      paint: {
        'line-color': '#a0c8f0',
        'line-dasharray': [2, 4],
        'line-width': {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'river'],
        ['!=', 'brunnel', 'tunnel'],
        ['!=', 'intermittent', 1],
      ],
      id: 'waterway_river',
      layout: {
        'line-cap': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.2,
          stops: [
            [11, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'river'],
        ['!=', 'brunnel', 'tunnel'],
        ['==', 'intermittent', 1],
      ],
      id: 'waterway_river_intermittent',
      layout: {
        'line-cap': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#a0c8f0',
        'line-dasharray': [3, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [11, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!=', 'class', 'river'],
        ['!=', 'brunnel', 'tunnel'],
        ['!=', 'intermittent', 1],
      ],
      id: 'waterway_other',
      layout: {
        'line-cap': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!=', 'class', 'river'],
        ['!=', 'brunnel', 'tunnel'],
        ['==', 'intermittent', 1],
      ],
      id: 'waterway_other_intermittent',
      layout: {
        'line-cap': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#a0c8f0',
        'line-dasharray': [4, 3],
        'line-width': {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'intermittent', 1]],
      id: 'water_intermittent',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgba(172, 218, 251, 1)',
        'fill-opacity': 0.85,
      },
      source: 'openmaptiles',
      'source-layer': 'water',
      type: 'fill',
    },
    {
      filter: ['all', ['!=', 'intermittent', 1], ['!=', 'brunnel', 'tunnel']],
      id: 'water',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-color': 'rgba(134, 204, 250, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'water',
      type: 'fill',
    },
    {
      filter: ['all', ['in', 'class', 'sand']],
      id: 'landcover_sand',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-antialias': false,
        'fill-color': '#f2e9ac',
        'fill-opacity': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'landcover',
      type: 'fill',
    },
    {
      filter: ['all', ['in', 'class', 'sand']],
      id: 'landcover_sand_outline',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#f2e9ac',
        'line-width': 2,
      },
      source: 'openmaptiles',
      'source-layer': 'landcover',
      type: 'line',
    },
    {
      filter: ['==', '$type', 'Polygon'],
      id: 'aeroway_fill',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 11,
      paint: {
        'fill-color': 'rgba(229, 228, 224, 1)',
        'fill-opacity': 0.7,
      },
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      type: 'fill',
    },
    {
      filter: ['all', ['==', '$type', 'LineString'], ['==', 'class', 'runway']],
      id: 'aeroway_runway',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 11,
      paint: {
        'line-color': '#f0ede9',
        'line-width': {
          base: 1.2,
          stops: [
            [11, 3],
            [20, 16],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'class', 'taxiway'],
      ],
      id: 'aeroway_taxiway',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 11,
      paint: {
        'line-color': '#f0ede9',
        'line-width': {
          base: 1.2,
          stops: [
            [11, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      type: 'line',
    },
    {
      filter: ['all', ['in', 'class', 'ferry']],
      id: 'ferry',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      paint: {
        'line-color': 'rgba(108, 159, 182, 1)',
        'line-dasharray': [2, 2],
        'line-width': 1.1,
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'ramp', 1],
        ['==', 'brunnel', 'tunnel'],
      ],
      id: 'tunnel_motorway_link_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-dasharray': [0.5, 0.25],
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'service', 'track'],
      ],
      id: 'tunnel_service_track_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#cfcdca',
        'line-dasharray': [0.5, 0.25],
        'line-width': {
          base: 1.2,
          stops: [
            [15, 1],
            [16, 4],
            [20, 11],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'ramp', '1'],
        ['==', 'brunnel', 'tunnel'],
        ['>', 'layer', 0],
      ],
      id: 'tunnel_link_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'street', 'street_limited'],
      ],
      id: 'tunnel_street_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#cfcdca',
        'line-opacity': {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
        'line-width': {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary'],
      ],
      id: 'tunnel_secondary_tertiary_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(195, 189, 187, 1)',
        'line-dasharray': [0.5, 0.25],
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [8, 1.5],
            [20, 17],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'tunnel_trunk_primary_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-dasharray': [0.5, 0.25],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'class', 'motorway'], ['==', 'brunnel', 'tunnel']],
      id: 'tunnel_motorway_casing',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-dasharray': [0.5, 0.25],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'path', 'pedestrian'],
      ],
      id: 'tunnel_path_pedestrian',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(204, 196, 176, 0.45)',
        'line-dasharray': [1, 0.75],
        'line-width': {
          base: 1.2,
          stops: [
            [14, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway_link'],
        ['==', 'ramp', 1],
        ['==', 'brunnel', 'tunnel'],
      ],
      id: 'tunnel_motorway_link',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'service', 'track'],
      ],
      id: 'tunnel_service_track',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'service_construction', 'track_construction'],
      ],
      id: 'tunnel_service_track_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'ramp', '1'],
        ['==', 'brunnel', 'tunnel'],
        ['>', 'layer', 0],
      ],
      id: 'tunnel_link',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff4c6',
        'line-width': {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'minor']],
      id: 'tunnel_minor',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'minor_construction'],
      ],
      id: 'tunnel_minor_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary'],
      ],
      id: 'tunnel_secondary_tertiary',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(245, 245, 243, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'secondary_construction', 'tertiary_construction'],
      ],
      id: 'tunnel_secondary_tertiary_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'tunnel_trunk_primary',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff4c6',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'tunnel'],
        ['in', 'class', 'primary_construction', 'trunk_construction'],
      ],
      id: 'tunnel_trunk_primary_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff4c6',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'class', 'motorway'], ['==', 'brunnel', 'tunnel']],
      id: 'tunnel_motorway',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#ffdaa6',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway_construction'],
        ['==', 'brunnel', 'tunnel'],
      ],
      id: 'tunnel_motorway_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#ffdaa6',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'rail']],
      id: 'tunnel_major_rail',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'rail']],
      id: 'tunnel_major_rail_hatching',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-dasharray': [0.2, 8],
        'line-width': {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 3],
            [20, 8],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', '$type', 'Polygon'], ['==', 'class', 'pier']],
      id: 'road_area_pier',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-antialias': true,
        'fill-color': 'rgba(246, 241, 229, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'fill',
    },
    {
      filter: ['all', ['==', '$type', 'LineString'], ['in', 'class', 'pier']],
      id: 'road_pier',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(246, 241, 229, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [15, 1],
            [17, 4],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', '$type', 'Polygon'], ['==', 'brunnel', 'bridge']],
      id: 'road_area_bridge',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-antialias': true,
        'fill-color': 'rgba(246, 241, 229, 0.6)',
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'fill',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'Polygon'],
        ['!has', 'brunnel'],
        ['!in', 'class', 'bridge', 'pier'],
      ],
      id: 'road_area_pattern',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'fill-pattern': 'pedestrian_polygon',
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'fill',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'service', 'track'],
      ],
      id: 'road_service_track_casing',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [15, 1],
            [16, 4],
            [20, 11],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        [
          '!in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'pedestrian',
          'path',
          'track',
          'service',
        ],
        ['==', 'ramp', 1],
      ],
      id: 'road_link_casing',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 13,
      paint: {
        'line-color': '#e9ac77',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'ramp', 1],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'road_trunk_primary_link_casing',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 0.7],
            [20, 14],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway'],
        ['==', 'ramp', 1],
      ],
      id: 'road_motorway_link_casing',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 12,
      paint: {
        'line-color': '#e9ac77',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'minor'],
        ['!=', 'ramp', '1'],
      ],
      id: 'road_minor_casing',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#cfcdca',
        'line-opacity': {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
        'line-width': {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 20],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary'],
        ['!=', 'ramp', 1],
      ],
      id: 'road_secondary_tertiary_casing-copy',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(195, 189, 187, 1)',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [8, 1.5],
            [20, 17],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['!=', 'ramp', 1],
        ['in', 'class', 'primary', 'trunk'],
        ['!=', 'ramp', 1],
      ],
      id: 'road_trunk_primary_casing',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway'],
        ['!=', 'ramp', 1],
      ],
      id: 'road_motorway_casing',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'path', 'pedestrian'],
      ],
      id: 'road_path_pedestrian',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 14,
      paint: {
        'line-color': 'rgba(204, 196, 176, 0.45)',
        'line-dasharray': [1, 1],
        'line-width': {
          base: 1.2,
          stops: [
            [14, 1],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'ramp', 1],
        [
          '!in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'pedestrian',
          'path',
          'track',
          'service',
        ],
      ],
      id: 'road_link',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 13,
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'ramp', 1],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'road_trunk_primary_link',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 0.5],
            [20, 10],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway'],
        ['==', 'ramp', 1],
      ],
      id: 'road_motorway_link',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 12,
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'service', 'track'],
      ],
      id: 'road_service_track',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'service_construction', 'track_construction'],
      ],
      id: 'road_service_track_construction',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['!in', 'brunnel', 'bridge', 'tunnel'],
          ['in', 'class', 'minor'],
        ],
      ],
      id: 'road_minor',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['!in', 'brunnel', 'bridge', 'tunnel'],
          ['in', 'class', 'minor_construction'],
        ],
      ],
      id: 'road_minor_construction',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary'],
      ],
      id: 'road_secondary_tertiary',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(245, 245, 243, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'secondary_construction', 'tertiary_construction'],
      ],
      id: 'road_secondary_tertiary_construction',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['!=', 'ramp', 1],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'road_trunk_primary',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['!=', 'ramp', 1],
        ['in', 'class', 'primary_construction', 'trunk_construction'],
      ],
      id: 'road_trunk_primary_construction',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fea',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway'],
        ['!=', 'ramp', 1],
      ],
      id: 'road_motorway',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': {
          base: 1,
          stops: [
            [5, 'hsl(26, 87%, 62%)'],
            [6, '#fc8'],
          ],
        },
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway_construction'],
        ['!=', 'ramp', 1],
      ],
      id: 'road_motorway_construction',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': {
          base: 1,
          stops: [
            [5, 'hsl(26, 87%, 62%)'],
            [6, '#fc8'],
          ],
        },
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'class', 'rail'],
      ],
      id: 'road_major_rail',
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['==', 'class', 'rail'],
      ],
      id: 'road_major_rail_hatching',
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-dasharray': [0.2, 8],
        'line-width': {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 3],
            [20, 8],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'subclass', 'tram', 'light_rail'],
      ],
      id: 'road_minor_rail',
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['!in', 'brunnel', 'bridge', 'tunnel'],
        ['in', 'subclass', 'tram', 'light_rail'],
      ],
      id: 'road_minor_rail_hatching',
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-dasharray': [0.2, 4],
        'line-width': {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 2],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      id: 'building',
      layout: {
        visibility: 'visible',
      },
      maxzoom: 14,
      metadata: {},
      minzoom: 13,
      paint: {
        'fill-color': 'rgba(189, 185, 181, 0.3)',
        'fill-outline-color': {
          base: 1,
          stops: [
            [13, 'hsla(35, 6%, 79%, 0.32)'],
            [14, 'hsl(35, 6%, 79%)'],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'building',
      type: 'fill',
    },
    {
      filter: ['all', ['!has', 'hide_3d']],
      id: 'building-3d',
      layout: {
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 14,
      paint: {
        'fill-extrusion-base': {
          property: 'render_min_height',
          type: 'identity',
        },
        'fill-extrusion-color': 'rgba(189, 185, 181, 1)',
        'fill-extrusion-height': {
          property: 'render_height',
          type: 'identity',
        },
        'fill-extrusion-opacity': 0.3,
      },
      source: 'openmaptiles',
      'source-layer': 'building',
      type: 'fill-extrusion',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'brunnel', 'bridge'],
      ],
      id: 'waterway-bridge-case',
      layout: {
        'line-cap': 'butt',
        'line-join': 'miter',
      },
      paint: {
        'line-color': '#bbbbbb',
        'line-gap-width': {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
        'line-width': {
          base: 1.6,
          stops: [
            [12, 0.5],
            [20, 5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'brunnel', 'bridge'],
      ],
      id: 'waterway-bridge',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'rgba(134, 204, 250, 1)',
        'line-width': {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'waterway',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'ramp', 1],
        ['==', 'brunnel', 'bridge'],
      ],
      id: 'bridge_motorway_link_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'service', 'track'],
      ],
      id: 'bridge_service_track_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [15, 1],
            [16, 4],
            [20, 11],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'class', 'link'], ['==', 'brunnel', 'bridge']],
      id: 'bridge_link_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'street', 'street_limited'],
      ],
      id: 'bridge_street_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': 'hsl(36, 6%, 74%)',
        'line-opacity': {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
        'line-width': {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 25],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'path', 'pedestrian'],
      ],
      id: 'bridge_path_pedestrian_casing',
      layout: {
        'line-join': 'miter',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': 'hsl(35, 6%, 80%)',
        'line-dasharray': [1, 0],
        'line-width': {
          base: 1.2,
          stops: [
            [14, 1.5],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'secondary', 'tertiary'],
      ],
      id: 'bridge_secondary_tertiary_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(195, 189, 187, 1)',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [8, 1.5],
            [20, 17],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'bridge_trunk_primary_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'brunnel', 'bridge'],
        ['!=', 'ramp', 1],
      ],
      id: 'bridge_motorway_casing',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'path', 'pedestrian'],
      ],
      id: 'bridge_path_pedestrian',
      metadata: {},
      paint: {
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [1, 0.3],
        'line-width': {
          base: 1.2,
          stops: [
            [14, 0.5],
            [20, 10],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'ramp', 1],
        ['==', 'brunnel', 'bridge'],
      ],
      id: 'bridge_motorway_link',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'service', 'track'],
      ],
      id: 'bridge_service_track',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'service_construction', 'track_construction'],
      ],
      id: 'bridge_service_track_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'class', 'link'], ['==', 'brunnel', 'bridge']],
      id: 'bridge_link',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'brunnel', 'bridge'], ['in', 'class', 'minor']],
      id: 'bridge_minor',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'minor_construction'],
      ],
      id: 'bridge_minor_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-opacity': 1,
        'line-width': {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'secondary', 'tertiary'],
      ],
      id: 'bridge_secondary_tertiary',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': 'rgba(245, 245, 243, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'secondary_construction', 'tertiary_construction'],
      ],
      id: 'bridge_secondary_tertiary_construction',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#fff',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'primary', 'trunk'],
      ],
      id: 'bridge_trunk_primary',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'brunnel', 'bridge'],
        ['in', 'class', 'primary_construction', 'trunk_construction'],
      ],
      id: 'bridge_trunk_primary_construction',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      paint: {
        'line-color': '#fea',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'brunnel', 'bridge'],
        ['!=', 'ramp', 1],
      ],
      id: 'bridge_motorway',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'class', 'motorway_construction'],
        ['==', 'brunnel', 'bridge'],
        ['!=', 'ramp', 1],
      ],
      id: 'bridge_motorway_construction',
      layout: {
        'line-join': 'round',
      },
      metadata: {},
      paint: {
        'line-color': '#fc8',
        'line-dasharray': [2, 2],
        'line-width': {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'class', 'rail'], ['==', 'brunnel', 'bridge']],
      id: 'bridge_major_rail',
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['==', 'class', 'rail'], ['==', 'brunnel', 'bridge']],
      id: 'bridge_major_rail_hatching',
      metadata: {},
      paint: {
        'line-color': '#bbb',
        'line-dasharray': [0.2, 8],
        'line-width': {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 3],
            [20, 8],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['==', 'class', 'aerialway'],
      id: 'cablecar',
      layout: {
        'line-cap': 'round',
        visibility: 'visible',
      },
      minzoom: 13,
      paint: {
        'line-color': 'hsl(0, 0%, 70%)',
        'line-width': {
          base: 1,
          stops: [
            [11, 1],
            [19, 2.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['==', 'class', 'aerialway'],
      id: 'cablecar-dash',
      layout: {
        'line-cap': 'round',
        visibility: 'visible',
      },
      minzoom: 13,
      paint: {
        'line-color': 'hsl(0, 0%, 70%)',
        'line-dasharray': [2, 3],
        'line-width': {
          base: 1,
          stops: [
            [11, 3],
            [19, 5.5],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'line',
    },
    {
      filter: ['all', ['in', 'admin_level', 3, 4], ['==', 'maritime', 0]],
      id: 'boundary_3',
      layout: {
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 3,
      paint: {
        'line-color': '#9e9cab',
        'line-dasharray': [5, 3],
        'line-width': {
          base: 1,
          stops: [
            [4, 0.4],
            [5, 0.7],
            [12, 1.6],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'maritime', 0],
        ['!has', 'claimed_by'],
      ],
      id: 'boundary_2_z0-4',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      maxzoom: 5,
      metadata: {},
      minzoom: 0,
      paint: {
        'line-color': 'rgba(139, 139, 139, 1)',
        'line-opacity': 1,
        'line-width': {
          base: 1,
          stops: [
            [3, 1],
            [5, 1.2],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'admin_level', 2],
        ['!has', 'claimed_by'],
        ['==', 'maritime', 1],
      ],
      id: 'boundary_2_z0-4_maritime',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      maxzoom: 5,
      metadata: {},
      minzoom: 0,
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-opacity': 1,
        'line-width': {
          base: 1,
          stops: [
            [3, 1],
            [5, 1.2],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'disputed', 0],
        ['==', 'maritime', 0],
      ],
      id: 'boundary_2_z5',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': 'rgba(139, 139, 139, 1)',
        'line-opacity': 1,
        'line-width': {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'disputed', 1],
        ['==', 'maritime', 0],
      ],
      id: 'boundary_2_z5_disputed',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': 'rgba(120, 120, 120, 1)',
        'line-dasharray': [4, 3],
        'line-opacity': 1,
        'line-width': {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'disputed', 1],
        ['==', 'maritime', 1],
      ],
      id: 'boundary_2_z5_disputed_maritime',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-dasharray': [4, 3],
        'line-opacity': 1,
        'line-width': {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'disputed', 0],
        ['==', 'maritime', 1],
      ],
      id: 'boundary_2_z5_maritime',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-opacity': 1,
        'line-width': {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
      },
      source: 'openmaptiles',
      'source-layer': 'boundary',
      type: 'line',
    },
    {
      filter: ['all', ['==', '$type', 'LineString']],
      id: 'water_name_line',
      layout: {
        'symbol-placement': 'line',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Regular', 'Noto Sans Regular'],
        'text-max-width': 5,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 0,
      paint: {
        'text-color': '#5d60be',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'water_name',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', '$type', 'Point'], ['!=', 'class', 'ocean']],
      id: 'water_name_point',
      layout: {
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Regular', 'Noto Sans Regular'],
        'text-max-width': 5,
        'text-size': 12,
        visibility: 'visible',
      },
      maxzoom: 24,
      metadata: {},
      minzoom: 2,
      paint: {
        'text-color': 'rgba(76, 125, 173, 1)',
        'text-halo-color': 'rgba(255,255,255,0)',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'water_name',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'ocean']],
      id: 'water_ocean_name_point',
      layout: {
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Regular', 'Noto Sans Regular'],
        'text-max-width': 5,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 0,
      paint: {
        'text-color': 'rgba(76, 125, 173, 1)',
        'text-halo-color': 'rgba(255,255,255,0)',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'water_name',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['>=', 'rank', 20],
        [
          'any',
          [
            'all',
            ['in', 'class', 'pitch'],
            [
              'in',
              'subclass',
              'soccer',
              'tennis',
              'baseball',
              'basketball',
              'swimming',
              'golf',
            ],
          ],
        ],
        ['any', ['!has', 'level'], ['==', 'level', 0]],
      ],
      id: 'poi_z16_subclass',
      layout: {
        'icon-image': '{subclass}_11',
        'text-anchor': 'top',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 9,
        'text-offset': [0, 0.6],
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 16,
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'poi',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['>=', 'rank', 20],
        [
          'none',
          [
            'all',
            ['in', 'class', 'pitch'],
            [
              'in',
              'subclass',
              'soccer',
              'tennis',
              'baseball',
              'basketball',
              'swimming',
              'golf',
            ],
          ],
        ],
        ['any', ['!has', 'level'], ['==', 'level', 0]],
      ],
      id: 'poi_z16',
      layout: {
        'icon-image': '{class}_11',
        'text-anchor': 'top',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 9,
        'text-offset': [0, 0.6],
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 16,
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'poi',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['>=', 'rank', 7],
        ['<', 'rank', 20],
        ['any', ['!has', 'level'], ['==', 'level', 0]],
      ],
      id: 'poi_z15',
      layout: {
        'icon-image': '{class}_11',
        'text-anchor': 'top',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 9,
        'text-offset': [0, 0.6],
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 15,
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'poi',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['any', ['<', 'rank', 7]],
        ['any', ['!has', 'level'], ['==', 'level', 0]],
      ],
      id: 'poi_z14',
      layout: {
        'icon-image': '{class}_11',
        'icon-size': 0.9,
        'text-anchor': 'top',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 9,
        'text-offset': [0, 0.6],
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 14.2,
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'poi',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['in', 'class', 'bus', 'railway', 'airport'],
        ['==', 'subclass', 'station'],
      ],
      id: 'poi_transit',
      layout: {
        'icon-image': '{class}_11',
        'icon-size': 0.9,
        'text-anchor': 'left',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 9,
        'text-offset': [0.9, 0],
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 15,
      paint: {
        'text-color': 'rgba(102, 102, 102, 1)',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'poi',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', 'oneway', 1],
        [
          'in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'secondary',
          'tertiary',
          'minor',
          'service',
        ],
      ],
      id: 'road_oneway',
      layout: {
        'icon-image': 'oneway',
        'icon-padding': 2,
        'icon-rotate': 90,
        'icon-rotation-alignment': 'map',
        'icon-size': {
          stops: [
            [15, 0.5],
            [19, 1],
          ],
        },
        'symbol-placement': 'line',
        'symbol-spacing': 75,
        visibility: 'visible',
      },
      minzoom: 15,
      paint: {
        'icon-opacity': 0.5,
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', 'oneway', -1],
        [
          'in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'secondary',
          'tertiary',
          'minor',
          'service',
        ],
      ],
      id: 'road_oneway_opposite',
      layout: {
        'icon-image': 'oneway',
        'icon-padding': 2,
        'icon-rotate': -90,
        'icon-rotation-alignment': 'map',
        'icon-size': {
          stops: [
            [15, 0.5],
            [19, 1],
          ],
        },
        'symbol-placement': 'line',
        'symbol-spacing': 75,
      },
      minzoom: 15,
      paint: {
        'icon-opacity': 0.5,
      },
      source: 'openmaptiles',
      'source-layer': 'transportation',
      type: 'symbol',
    },
    {
      filter: ['all'],
      id: 'road_label',
      layout: {
        'symbol-placement': 'line',
        'text-anchor': 'center',
        'text-field': '{name:latin} {name:nonlatin}',
        'text-font': ['Roboto Regular', 'Noto Sans Regular'],
        'text-offset': [0, 0.15],
        'text-size': {
          base: 1,
          stops: [
            [13, 12],
            [14, 13],
          ],
        },
      },
      metadata: {},
      paint: {
        'text-color': '#765',
        'text-halo-blur': 0.5,
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['<=', 'ref_length', 6],
        ['==', '$type', 'LineString'],
        ['!in', 'network', 'us-interstate', 'us-highway', 'us-state'],
      ],
      id: 'highway-shield',
      layout: {
        'icon-image': 'road_{ref_length}',
        'icon-rotation-alignment': 'viewport',
        'icon-size': 1,
        'symbol-avoid-edges': true,
        'symbol-placement': {
          base: 1,
          stops: [
            [10, 'point'],
            [11, 'line'],
          ],
        },
        'symbol-spacing': 200,
        'text-field': '{ref}',
        'text-font': ['Noto Sans Regular'],
        'text-rotation-alignment': 'viewport',
        'text-size': 10,
      },
      minzoom: 8,
      paint: {
        'text-color': 'rgba(37, 36, 36, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['<=', 'ref_length', 6],
        ['==', '$type', 'LineString'],
        ['in', 'network', 'us-interstate'],
      ],
      id: 'highway-shield-us-interstate',
      layout: {
        'icon-image': '{network}_{ref_length}',
        'icon-rotation-alignment': 'viewport',
        'icon-size': 1,
        'symbol-avoid-edges': true,
        'symbol-placement': {
          base: 1,
          stops: [
            [7, 'point'],
            [7, 'line'],
            [8, 'line'],
          ],
        },
        'symbol-spacing': 200,
        'text-field': '{ref}',
        'text-font': ['Noto Sans Regular'],
        'text-rotation-alignment': 'viewport',
        'text-size': 9,
      },
      minzoom: 7,
      paint: {
        'text-color': 'rgba(255, 255, 255, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['<=', 'ref_length', 6],
        ['==', '$type', 'LineString'],
        ['in', 'network', 'us-highway', 'us-state'],
      ],
      id: 'highway-shield-us-other',
      layout: {
        'icon-image': '{network}_{ref_length}',
        'icon-rotation-alignment': 'viewport',
        'icon-size': 1,
        'symbol-avoid-edges': true,
        'symbol-placement': {
          base: 1,
          stops: [
            [10, 'point'],
            [11, 'line'],
          ],
        },
        'symbol-spacing': 200,
        'text-field': '{ref}',
        'text-font': ['Noto Sans Regular'],
        'text-rotation-alignment': 'viewport',
        'text-size': 9,
      },
      minzoom: 9,
      paint: {
        'text-color': 'rgba(37, 36, 36, 1)',
      },
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      type: 'symbol',
    },
    {
      filter: ['all', ['has', 'iata']],
      id: 'airport-label-major',
      layout: {
        'icon-image': 'airport_11',
        'icon-size': 1,
        'text-anchor': 'top',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Noto Sans Regular'],
        'text-max-width': 9,
        'text-offset': [0, 0.6],
        'text-optional': true,
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      minzoom: 10,
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'aerodrome_label',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'gate']],
      id: 'airport_gate',
      layout: {
        'text-field': '{ref}',
        'text-font': ['Roboto Medium', 'Noto Sans Regular'],
        'text-size': {
          stops: [
            [17, 9],
            [19, 15],
          ],
        },
      },
      minzoom: 16.5,
      paint: {
        'text-color': 'rgba(135, 135, 135, 1)',
        'text-halo-color': 'rgba(255, 255, 255, 1)',
        'text-halo-width': 1.5,
      },
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['in', 'class', 'hamlet', 'island', 'islet', 'neighbourhood', 'suburb'],
      ],
      id: 'place_other',
      layout: {
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-letter-spacing': 0.1,
        'text-max-width': 9,
        'text-size': {
          base: 1.2,
          stops: [
            [12, 10],
            [15, 14],
          ],
        },
        'text-transform': 'uppercase',
        visibility: 'visible',
      },
      metadata: {},
      minzoom: 8,
      paint: {
        'text-color': 'rgba(66, 62, 62, 1)',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'village']],
      id: 'place_village',
      layout: {
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Regular', 'Noto Sans Regular'],
        'text-max-width': 8,
        'text-size': {
          base: 1.2,
          stops: [
            [10, 12],
            [15, 22],
          ],
        },
      },
      metadata: {},
      minzoom: 8,
      paint: {
        'text-color': '#333',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'town']],
      id: 'place_town',
      layout: {
        'icon-image': {
          base: 1,
          stops: [
            [0, 'circle-stroked_16'],
            [10, ''],
          ],
        },
        'text-anchor': 'bottom',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Regular', 'Noto Sans Regular'],
        'text-max-width': 8,
        'text-offset': [0, 0],
        'text-size': {
          base: 1.2,
          stops: [
            [7, 12],
            [11, 16],
          ],
        },
      },
      metadata: {},
      minzoom: 6,
      paint: {
        'text-color': '#333',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'city']],
      id: 'place_city',
      layout: {
        'icon-allow-overlap': true,
        'icon-image': {
          base: 1,
          stops: [
            [0, 'circle-stroked_16'],
            [10, ''],
          ],
        },
        'icon-optional': false,
        'text-anchor': 'bottom',
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Medium', 'Noto Sans Regular'],
        'text-max-width': 8,
        'text-offset': [0, 0],
        'text-size': {
          base: 1.2,
          stops: [
            [7, 14],
            [11, 24],
          ],
        },
      },
      metadata: {},
      minzoom: 5,
      paint: {
        'text-color': '#333',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'state']],
      id: 'place_state',
      layout: {
        'text-field': '{name:latin}\n{name:nonlatin}',
        'text-font': ['Roboto Medium', 'Noto Sans Regular'],
        'text-letter-spacing': 0.1,
        'text-padding': 2,
        'text-size': {
          stops: [
            [3, 10],
            [6, 14],
          ],
        },
        'text-transform': 'uppercase',
      },
      maxzoom: 6,
      metadata: {},
      minzoom: 3,
      paint: {
        'text-color': 'rgba(74, 72, 66, 1)',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 0.8,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'country'], ['!has', 'iso_a2']],
      id: 'country_other',
      layout: {
        'text-field': '{name:latin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 6.25,
        'text-size': {
          stops: [
            [3, 9],
            [7, 15],
          ],
        },
        'text-transform': 'none',
      },
      metadata: {},
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['>=', 'rank', 3],
        ['==', 'class', 'country'],
        ['has', 'iso_a2'],
      ],
      id: 'country_3',
      layout: {
        'text-field': '{name:latin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 6.25,
        'text-size': {
          stops: [
            [3, 11],
            [7, 17],
          ],
        },
        'text-transform': 'none',
      },
      metadata: {},
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', 'rank', 2],
        ['==', 'class', 'country'],
        ['has', 'iso_a2'],
      ],
      id: 'country_2',
      layout: {
        'text-field': '{name:latin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 6.25,
        'text-size': {
          stops: [
            [2, 11],
            [5, 17],
          ],
        },
        'text-transform': 'none',
      },
      metadata: {},
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: [
        'all',
        ['==', 'rank', 1],
        ['==', 'class', 'country'],
        ['has', 'iso_a2'],
      ],
      id: 'country_1',
      layout: {
        'text-field': '{name:latin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 6.25,
        'text-size': {
          stops: [
            [1, 11],
            [4, 17],
            [6, 19],
          ],
        },
        'text-transform': 'none',
      },
      metadata: {},
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'continent']],
      id: 'continent',
      layout: {
        'text-field': '{name:latin}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-justify': 'center',
        'text-size': 13,
        'text-transform': 'uppercase',
      },
      maxzoom: 1,
      metadata: {},
      paint: {
        'text-color': '#633',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'place',
      type: 'symbol',
    },
    {
      id: 'housenumber',
      layout: {
        'text-field': '{housenumber}',
        'text-font': ['Roboto Medium', 'Noto Sans Regular'],
        'text-size': 10,
      },
      minzoom: 17.5,
      paint: {
        'text-color': 'rgba(119, 102, 85, 0.69)',
      },
      source: 'openmaptiles',
      'source-layer': 'housenumber',
      type: 'symbol',
    },
    {
      filter: ['all', ['==', 'class', 'demo']],
      id: 'poi_demo',
      layout: {
        'icon-image': '{class}_11',
        'icon-size': 0.9,
        'text-anchor': 'left',
        'text-field': '{name}',
        'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
        'text-max-width': 9,
        'text-offset': [0.9, 0],
        'text-padding': 2,
        'text-size': 12,
        visibility: 'visible',
      },
      maxzoom: 9,
      metadata: {},
      minzoom: 0,
      paint: {
        'text-color': 'rgba(102, 102, 102, 1)',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1,
      },
      source: 'openmaptiles',
      'source-layer': 'poi',
      type: 'symbol',
    },
  ],
  metadata: {
    'mapbox:type': 'template',
    'maptiler:copyright':
      'This style was generated on MapTiler Cloud. Usage outside of MapTiler Cloud requires valid OpenMapTiles Production Package: https://openmaptiles.com/production-package/ -- please contact us.',
    'openmaptiles:version': '3.x',
  },
  name: 'Streets',
  pitch: 0,
  sources: {
    maptiler_attribution: {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      type: 'vector',
    },
    openmaptiles: {
      type: 'vector',
      url: 'http://localhost:9000/data/chinaMap.json',
    },
  },
  sprite: 'http://localhost:9000/styles/streets/sprite',
  version: 8,
  zoom: 1,
};
