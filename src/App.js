import './App.css';
import { useState } from 'react';
import DailyIframe from '@daily-co/daily-js';

import { Call } from './components/Call/Call';

const ROOM_URL = 'https://webamigos.daily.co/4MkShXrWxlryCWJ0ZNo1';

const STATE_IDLE = 'STATE_IDLE';
const STATE_CREATING = 'STATE_CREATING';
const STATE_JOINING = 'STATE_JOINING';
const STATE_JOINED = 'STATE_JOINED';
const STATE_LEAVING = 'STATE_LEAVING';
const STATE_ERROR = 'STATE_ERROR';

function App() {
  const [appState, setAppState] = useState();
  const [roomUrl, setRoomUrl] = useState(ROOM_URL);
  const [callObject, setCallObject] = useState(null);

  const showCall = [STATE_JOINING, STATE_JOINED].includes(appState);

  const startJoiningCall = () => {
    const newCallObject = DailyIframe.createCallObject();
    setCallObject(newCallObject);
    setAppState(STATE_JOINING);
    newCallObject.join({ url: ROOM_URL });
  };

  return (
    <div className="app">
      {showCall
        ? <Call roomUrl={roomUrl} callObject={callObject} /> 
        : <button onClick={() => {
          startJoiningCall();
        }}>
          Start a call
        </button>}
    </div>
  );
}

export default App;
