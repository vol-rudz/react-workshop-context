import React, {useEffect, useState} from 'react';
import {getData} from "../../api";
import {TODAY} from "../Map/constants";

const Table = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getData(TODAY()).then(setMarkers);
  }, []);
  return (
    <table>
      <tr>
        <th>Область</th>
        <th>Виявлено</th>
        <th>Померло</th>
        <th>Одужало</th>
        <th>Хворіє</th>
        <th>Підозри</th>
      </tr>
      {
        markers.map(item => (
          <tr>
            <td>{item.label.uk}</td>
            <td>{item.confirmed}</td>
            <td>{item.deaths}</td>
            <td>{item.recovered}</td>
            <td>{item.existing}</td>
            <td>{item.suspicion}</td>
          </tr>
        ))
      }
    </table>
  )
};

export default Table;
