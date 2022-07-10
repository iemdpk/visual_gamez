const express = require('express')
const app = express()
const port = 3001;
const {connect,showTable, con} = require('./mysqlConnect');
const axios = require('axios').default;

app.use('/api/flats',require('./routes/flatRegister'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/fetch',require('./routes/showData'));
app.use('/api/rentals',require('./routes/rentalRegister'));
app.use('/api/complain',require('./routes/complain'));

connect();

app.get('/', (req, res) => {
  res.send('How to work is goin on');
})

app.get('/fetch', (req, res) => {

  var data = {"name":"deepak","father_Name":"Deepak Mishra"}
  res.send(data);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})