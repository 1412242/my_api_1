var mongoose = require('mongoose');
var Transaction = mongoose.model('Transactions');

exports.listTrans = function(req, res) {
    Transaction.find({user_from: res.body.username}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
}; 
exports.listAllTrans = function(req, res) {
    Transaction.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};
