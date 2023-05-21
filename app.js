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

// PORT
const PORT = process.env.PORT || 7777;

app.use('/waiting-list',waitingListRoutes);
mongoConnect(() =>{

//     app.listen(7777);
    app.listen(PORT, () =>
  console.log("Connected");
);
})
