import React, { useContext } from 'react';
import { SocketContext } from '../ContextSockets';
import { Button } from '@mui/material';


const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <h1>{call.name} is calling: </h1>
          <Button variant='contained' onClick={answerCall}>Answer</Button>
        </div>
      )}
    </div>
  )
}

export default Notifications