const mongoose = require('mongoose');
const url = `mongodb://127.0.0.1:27017/jokesNov22`;

mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a Database Commlink Sync with jokes`))
    .catch(err => console.log('Something went wrong when connecting to the database', err));