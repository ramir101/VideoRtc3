const port = process.env.PORT || 3000;
const express = require('express')
const app = express()
const path = require('path')
const server = require('http').Server(app);
const cors = require('cors');

const io = require('socket.io')(server, {
    origin:'*',
    methods: ['GET', 'POST']
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id);
    socket.on('disconnect', ()=>{
      socket.broadcast.emit('callended');
    });
  
    socket.on('calluser', ({ userToCall, signalData, from, name })=>{
      io.to(userToCall).emit('calluser', { signal: signalData, from, name});
    });
  
    socket.on('answercall', (data)=> {
      io.to(data.to).emit('callaccepted', data.signal);
    });
  
  });

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

server.listen(port, ()=> console.log(`listening on port ${port}`));
