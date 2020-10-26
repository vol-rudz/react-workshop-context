import React, { useState, useMemo } from 'react';
import DatePicker from "react-datepicker";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import Table from './Table';
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(new Date());
  const formattedDay = useMemo(() => {
    const dateObj = new Date(date);
    const day = dateObj.getDate() >= 10 ? dateObj.getDate() : `0${dateObj.getDate()}`;
    const month = dateObj.getMonth() >= 9 ? dateObj.getMonth() + 1 : `0${dateObj.getMonth() + 1}`;
    return `${dateObj.getFullYear()}-${month}-${day}`
  }, [date]);
  return (
    <aside style={{
      width: expanded ? '40%' : '50px'
    }}>
      <div>
        <div onClick={() => setExpanded(state => !state)}>
          {
            expanded
              ? <GrFormPrevious size='30px' />
              : <GrFormNext size='30px' />

          }
        </div>
      </div>
      {
        expanded && (
          <div className='body'>
            <div>
              <DatePicker selected={date} onChange={date => setDate(date)}/>
              <span>Оберіть дату</span>
            </div>
            <Table />
          </div>
        )
      }
    </aside>
  )
};

export default Sidebar;
