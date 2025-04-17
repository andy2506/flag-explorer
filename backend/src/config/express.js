const express = require('express');
const cors = require('cors');
const countryRoutes = require('../interfaces/routes/countryRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Flag Explorer Backend is running!');
});

app.use('/countries', countryRoutes);

module.exports = app;