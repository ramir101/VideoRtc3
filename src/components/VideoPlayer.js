import React, { useContext } from 'react';
import { SocketContext } from '../ContextSockets';
import { Grid, Typography, Paper } from '@mui/material';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
    return (
      <Grid container>
        {/* My Video */}
        {
          stream && (
            <Paper>
              <Grid item xs={12} md={6}>
                <Typography variant='h5'> {name || 'Name'}</Typography>
                <video playsInline muted ref={myVideo} autoPlay/>
              </Grid>
            </Paper>
          )
        }
        {/* friend's Video */}
        {
          callAccepted && !callEnded && (
            <Paper>
              <Grid item xs={12} md={6}>
               <Typography variant='h5'>{call.name || 'Name'}</Typography>
                <video playsInline ref={userVideo} autoPlay/>
                </Grid>
            </Paper>
          )
        }
      </Grid>
    )
  }
  
  export default VideoPlayer