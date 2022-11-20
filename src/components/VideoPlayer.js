import React, { useContext } from 'react';
import { SocketContext } from '../ContextSockets';
import { Grid, Typography, Paper } from '@mui/material';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

    const styling = {
      gridContainer: {
        justifyContent: 'center',
      },
      paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
      },
    }

    return (
      <Grid container sx={styling.gridContainer}>
        {/* My Video */}
        {
          stream && (
            <Paper sx={styling.paper}>
              <Grid item xs={12} md={6}>
                <Typography variant='h5'> {name || 'Name'}</Typography>
                <video playsInline muted ref={myVideo} autoPlay className='video'/>
              </Grid>
            </Paper>
          )
        }
        {/* friend's Video */}
        {
          callAccepted && !callEnded && (
            <Paper sx={styling.paper}>
              <Grid item xs={12} md={6}>
               <Typography variant='h5'>{call.name || 'Name'}</Typography>
                <video playsInline ref={userVideo} autoPlay className='video'/>
                </Grid>
            </Paper>
          )
        }
      </Grid>
    )
  }
  
  export default VideoPlayer