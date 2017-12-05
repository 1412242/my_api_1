var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String
    },
    wallet: {
        type: String,
        unique: true
    },
    cash: {
        type: Number,
        default: 1000
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', schema);
