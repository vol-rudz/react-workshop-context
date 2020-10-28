import React, { useEffect, useReducer } from 'react';
import Map from './Map';
import './App.css';
import Sidebar from './Sidebar';
import { initialState, dataReducer } from '../store/reducer';
import { getData } from "../api";
import { TODAY } from "./Map/constants";
import { DataContext } from "../store/context";
import { setData } from "../store/actionCreators";

const App = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    getData(TODAY()).then(data => dispatch(setData(data)));
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={{ dispatch, state }}>
        <Sidebar />
        <Map />
      </DataContext.Provider>
    </div>
  );
};

export default App;
