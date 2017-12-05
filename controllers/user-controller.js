var mongoose = require('mongoose');
var User = mongoose.model('Users');
var passwordHash = require('password-hash');

exports.listUsers = function(req, res) {
    User.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.addUser = function(req, res) {
    req.body.password = passwordHash.generate(req.body.password);
    var newUser = new User(req.body);
    newUser.wallet = req.body.username + "_wallet";
    newUser.save(function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.login = function(req, res) {
    var userLogin = req.body.username;
    var passwordLogin = req.body.password;
    User.find({username:userLogin}, function(err, user) {
        if (user.length <= 0)
            res.json(false);
        else
            res.json(passwordHash.verify(passwordLogin, user[0].password));
    });
}; 

exports.getUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.updateUser = function(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user) {
        if (err) {
        res.send(err);
        }
        res.json(user);
    });
};

exports.removeUser = function(req, res) {
    User.remove({_id: req.params.id}, function(err, user) {
        if (err) {
            res.send(err);
        }
    });
};
