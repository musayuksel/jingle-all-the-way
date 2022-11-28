import { useState } from 'react';
import './App.css';
import { santaCurrentPosition } from './utils/santaCurrentPosition';
import routes from './utils/routes.json';
function App() {
  const [value, setValue] = useState(
    `${new Date(routes[0].time).toISOString().split('T')[0]}T20:59`
  );

  const arraivalTimeMessage = santaCurrentPosition(value);

  return (
    <div className='App'>
      <label htmlFor='santaCurrentTime'>Choose a time </label>

      <input
        type='datetime-local'
        id='santaCurrentTime'
        name='santaCurrentTime'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={`${new Date(routes[0].time).toISOString().split('T')[0]}T00:00`}
        max={`${
          new Date(routes[routes.length - 1].time).toISOString().split('T')[0]
        }T23:59`}
      />
      <h2>{arraivalTimeMessage}</h2>
    </div>
  );
}

export default App;
