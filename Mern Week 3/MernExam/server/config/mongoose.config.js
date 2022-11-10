const mongoose = require('mongoose');
const database = 'Authors';

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})
.then(() => console.log(`Establised connection to Authors`))
.catch((error) => console.log(`Error establishing a connection to Authors`, error))