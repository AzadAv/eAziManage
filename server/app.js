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
mongoConnect(() =>{

    app.listen(7777);
})
