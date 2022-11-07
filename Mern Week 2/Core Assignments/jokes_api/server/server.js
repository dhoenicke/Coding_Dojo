const express = require('express');
const app = express();
const port = 8000;

const jokeRoutes = require('./server/routes/joke.routes');
jokeRoutes(app);

require('./config/mongoose.config');
// const mongoose = requires('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => console.log(`You like my jokes or what?\nPlease report to Port ${port} for Commlink Sync`));