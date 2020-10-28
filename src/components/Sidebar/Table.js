import React, { useContext } from 'react';
import { DataContext } from "../../context";

const Table = () => {
  const { data } = useContext(DataContext);

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
