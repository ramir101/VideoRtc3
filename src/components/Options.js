import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../ContextSockets';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

const Options = ( { children }) => {
  const { me, callAccepted, name, setName, leaveCall, callEnded, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState(''); 
  return (
        <Container>
            <Paper elevation={10} >
                <form noValidate autoComplete='off'>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                          <Typography variant='h6' gutterBottom>Account Info</Typography>  
                          <TextField label='Name' value={name} onChange={(ev) => {setName(ev.target.value)}} fullWidth/>
                          <CopyToClipboard text={me}>
                            <Button variant='contained' fullWidth startIcon={<Assignment fontSize='large'/>}>
                                Copy your ID - send to friend
                            </Button>   
                          </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography variant='h6' gutterBottom>Make a call</Typography>  
                          <TextField label='ID to call' value={idToCall} onChange={(ev) => {setIdToCall(ev.target.value)}} fullWidth/>
                          {callAccepted && !callEnded ? (
                            <Button variant='contained' startIcon={<PhoneDisabled fontSize='large'/>}  onClick={leaveCall} fullWidth>Hang Up</Button>
                          ): (
                            <Button variant='contained' startIcon={<Phone fontSize='large'/>}  onClick={()=> callUser(idToCall)} fullWidth>Call</Button>
                          )}
                        </Grid>
                    </Grid> 
                </form>
                { children }
            </Paper>
        </Container>
  )
}

export default Options