import React, {useContext, useEffect, useState} from 'react';
import ReactMapGL from 'react-map-gl';
import { INITIAL_VIEWPORT, TOKEN } from './constants';
import MarkerItem from '../MarkerItem';
import MAP_STYLE from './styles.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import {DataContext} from "../../context";

const Map = () => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const { data } = useContext(DataContext);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={setViewport}
      mapStyle={MAP_STYLE}
    >
      {data.map(marker => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </ReactMapGL>
  );
};

export default Map;
