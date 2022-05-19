const mongoose = require('mongoose');
const DB = 'product_manager_db';

mongoose.connect(`mongodb://localhost/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connected to database: ${DB}`))
    .catch((err) => console.log(`Could not connect to database: ${DB}, error code: ${err}`));