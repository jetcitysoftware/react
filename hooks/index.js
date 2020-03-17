import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useEvents from './events-hook.js';
import usePostMessage from './postmessage-hook.js';

function C() {
  const [sendMessage] = usePostMessage();

  return (
      <button onClick={() => sendMessage('hey!')}>Hey</button>
  );
}

function App() {
  const messageHandler = message => {
    setMessage(message);
  };

  const [message, setMessage] = useState();
  usePostMessage(messageHandler);
  const [sayOuch, ouch] = useEvents('ouch');
  const [sayOk, ok] = useEvents('ok');

  const sendMessages = e => {
    sayOuch('STOP THAT');
    sayOk('essss oh kay');
  };
  return (
    <>
      <div>Message: {message}</div>
      <div>Ouch: {ouch}</div>
      <div>OK: {ok}</div>
      <button onClick={sendMessages}>Send</button>
      <C />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
