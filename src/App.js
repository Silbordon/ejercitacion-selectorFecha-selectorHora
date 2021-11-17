import { useState } from 'react';
import {DatePicker, TimePicker, DateTimePicker} from '@material-ui/pickers';


function App() {

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date())
  console.log(fechaSeleccionada);

  return (
    <div className='contenedor'>
      <div className='grupo'>
        <label>FECHA</label>
        <DatePicker 
          value={fechaSeleccionada}
          onChange={setFechaSeleccionada}
        />
      </div>

      <div className='grupo'>
        <label>HORA</label>
        <TimePicker 
          value={fechaSeleccionada}
          onChange={setFechaSeleccionada}
        />
      </div>

      <div className='grupo'>
        <label>FECHA y HORA</label>
        <DateTimePicker 
          value={fechaSeleccionada}
          onChange={setFechaSeleccionada}
        />
      </div>
    </div>
  );
}

export default App;
