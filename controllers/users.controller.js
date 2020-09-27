const  Users  =  require("../models/users.model");
var  ObjectId  =  require('mongoose').Types.ObjectId;

const controller = {

    loginUser: (req, res, next) => {
        var query = { email: req.body.email, password: req.body.password};
        Users.find(query)
            .then(
                user => {
                    var emptySizeRes = 0;
                    if(user.length === emptySizeRes){
                        res.statusCode = 401;
                        res.setHeader("Content-type", "application/json");
                        res.json(user.length);
                    }
                    else {
                        res.statusCode = 200;
                        res.setHeader("Content-type", "application/json");
                        res.json(user[0]);
                    }
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    getAllUsers : (req, res, next) => {
        Users.find({})
            .then(
                users => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(users);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    createUser: (req, res, next) => {
        Users.create(req.body)
            .then(
                user => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(user);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    getUserExist: (req, res, next) => {
        var sizeIfUserExist = 1;

        isUserExist(req.params.email).exec(function(err, user){
            if(user.length >= sizeIfUserExist) {
                res.statusCode = 409;
                console.log("Can't create user ", user.length);
                res.json(user.length);
            }
            else {
                res.statusCode = 200;
                console.log("Can create user ");
                res.json(req.params.email);
            }
        });
    },

    updateUser: (req, res, next) => {
        Users.findByIdAndUpdate(req.params.userId, {$set: req.body}, {new: true})
            .then(
                user => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(user);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

};

function isUserExist(email){
    var query = {email: email};
    return Users.find(query);
}

module.exports  =  controller;
