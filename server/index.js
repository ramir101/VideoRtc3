const port = process.env.PORT || 3000;
const express = require('express')
const path = require('path')

const app = express()

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

app.listen(port, ()=> console.log(`listening on port ${port}`));
