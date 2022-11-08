const express = require('express');
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/mongoose.config')

const productapp = require('./routes/product.route')
productapp(app);

app.listen(port, () => {console.log(`Welcome to Product Manager ${port}`)})