import React, { useEffect, useState } from 'react';
import { getData } from "../../api";
import { TODAY } from "../Map/constants";

const Table = () => {
  const [data, setData] = useState([]);

  // TODO: replace Promise by React Context
  // TODO: use getFormattedDay from utils.js in <Sidebar /> if it was selected instead of TODAY()
  useEffect(() => {
    getData(TODAY()).then(setData);
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
          data.map(item => (
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
