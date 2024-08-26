// tryyyyyyyyyyy
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoConnect = require('./util/database').mongoConnect;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const waitingListRoutes = require('./routes/waitingListRoutes');
app.use('/waiting-list',waitingListRoutes);

const productionListRoutes = require('./routes/productionListRoutes');
app.use('/production-list',productionListRoutes);
// app.use(express.static(path.join(__dirname, 'client/build')));


const adminRoutes = require('./routes/adminRoutes');
app.use('/management', adminRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }


// PORT
const PORT = process.env.PORT || 7777;
mongoConnect(() =>{

    // app.listen(7777);
    app.listen(PORT, () => console.log("Connected to Heroku"));
})
