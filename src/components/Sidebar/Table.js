import React, { useContext } from 'react';
import { DataContext } from "../../store/context";

const Table = () => {
  const { state } = useContext(DataContext);
  const { data } = state;

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
