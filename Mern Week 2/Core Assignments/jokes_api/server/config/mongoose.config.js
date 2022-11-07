const mongoose = require('mongoose');
const database = 'jokesNov22';

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a Database Commlink Sync with ${database}`))
    .catch(err => console.log('Something went wrong when connecting to the database', err));