import React from 'react';
import { Typography, AppBar} from '@mui/material'

//Imported components below
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
// //

const useStyles = {
    appBar: {
        borderRadius: 15,
        margin: '30 px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
        backgroundColor: '#1565c0',
        color: 'white'
    },
}

const App = () => {
    return ( 
        <div className='wrapper'>
            <AppBar sx={useStyles.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Dimelo</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
     );
}
 
export default App;