const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const eventRoutes = require('./routes/eventRoutes')

app.use('/events',eventRoutes);

app.listen(7777);