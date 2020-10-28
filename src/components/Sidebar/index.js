import React, {useState, useContext, useCallback} from 'react';
import { DataContext } from '../../context';
import DatePicker from "react-datepicker";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import Table from './Table';
import { getFormattedDay } from "../../utils";
import { getData } from "../../api";
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(new Date());
  const { setContextData } = useContext(DataContext);

  const handleDateChange = useCallback(date => {
    setDate(date);
    const formattedDay = getFormattedDay(date);
    getData(formattedDay).then(setContextData);
  }, [setDate, setContextData]);

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
              <DatePicker selected={date} onChange={date => handleDateChange(date)}/>
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
