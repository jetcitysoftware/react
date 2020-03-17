import {useState} from 'react';

const Q = require('@nmq/q/client');

const useQ = (q) => {

  const queue = new Q(q);

  const [message, setMessage] = useState('');

  function subscribe(event, callback) {
    queue.subscribe(event, (payload) => callback(payload) );
  }

  function publish(q,event,payload) {
    Q.publish(q,event,payload);
  }

  return [message, subscribe];
};

export default useQ;
