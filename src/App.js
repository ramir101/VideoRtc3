import React from 'react';
import { Typography, AppBar} from '@mui/material'

const useStyles = {
    appBar: {
        borderRadius: 15,
        margin: '30 px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black'
    },
}

const App = () => {
    return ( 
        <div className='wrapper'>
            <AppBar sx={useStyles.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat by Ramir S.</Typography>
            </AppBar>
        </div>
     );
}
 
export default App;