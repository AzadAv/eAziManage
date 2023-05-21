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

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// PORT
const PORT = process.env.PORT || 7777;


mongoConnect(() =>{

    // app.listen(7777);
    app.listen(PORT, () => console.log("Connected to Heroku"));
})
