import React, {useEffect, useState} from 'react';
import {getData} from "../../api";
import {TODAY} from "../Map/constants";

const Table = () => {
  const [markers, setMarkers] = useState([]);

  // TODO: replace Promise by React Context
  // TODO: use formattedDay from the <Sidebar /> if it was selected instead of TODAY()
  useEffect(() => {
    getData(TODAY()).then(setMarkers);
  }, []);
  return (
    <table>
      <tbody>
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
            <tr key={item.id}>
              <td>{item.label.uk}</td>
              <td>{item.confirmed}</td>
              <td>{item.deaths}</td>
              <td>{item.recovered}</td>
              <td>{item.existing}</td>
              <td>{item.suspicion}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

export default Table;
