import React, { useEffect, useState } from 'react';
import Map from './Map';
import './App.css';
import Sidebar from './Sidebar';
import { DataContext } from '../context';
import { getData } from "../api";
import { TODAY } from "./Map/constants";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(TODAY()).then(setData);
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={{ data, setContextData: setData }}>
        <Sidebar />
        <Map />
      </DataContext.Provider>
    </div>
  );
}

export default App;
