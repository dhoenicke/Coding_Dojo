const mongoose = require('mongoose');
const database = 'MernExam';

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Establised connection to MernExam`))
    .catch((error) => console.log(`Error establishing a connection to MernExam`, error))