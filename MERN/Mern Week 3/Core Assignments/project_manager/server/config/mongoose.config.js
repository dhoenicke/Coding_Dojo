const mongoose = require('mongoose');
const database = 'productmanager22';

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Establised connection to the product system`))
.catch((error) => console.log(`Error establishing a connection to the product system`, error))