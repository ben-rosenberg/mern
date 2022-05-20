const mongoose = require('mongoose');
const NAME_MIN_LENGTH = 3;

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Author name field must not be empty' ],
        minlength: [ NAME_MIN_LENGTH, `Author name must be at least ${NAME_MIN_LENGTH} characters` ]
    }
}, { timestamps: true })

const Author = mongoose.model('Author', AuthorsSchema);
module.exports = Author;