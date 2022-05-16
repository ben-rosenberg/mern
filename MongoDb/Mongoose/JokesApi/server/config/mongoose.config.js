const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Successfully connected to the database'))
    .catch((err) => {
        console.log(`Something went wrong when connecting to the database (error code: ${err})`)
    });