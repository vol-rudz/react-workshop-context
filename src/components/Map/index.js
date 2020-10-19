import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { getData } from '../../api';
import { INITIAL_VIEWPORT, TODAY, TOKEN } from './constants';
import MarkerItem from '../MarkerItem';
import MAP_STYLE from './styles.json';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getData(TODAY()).then(setMarkers);
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={setViewport}
      mapStyle={MAP_STYLE}
    > 
      {markers.map(marker => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </ReactMapGL>
  );
};

export default Map;