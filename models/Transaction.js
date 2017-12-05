var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user_from: {
        type: String,
        trim: true
    },
    user_to: {
        type: String,
        trim: true
    },
    cash: {
        type: Number,
        default: 1000
    }
});

module.exports = mongoose.model('Transactions', schema);
