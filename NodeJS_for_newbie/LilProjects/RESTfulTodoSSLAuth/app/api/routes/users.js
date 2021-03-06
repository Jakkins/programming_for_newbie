const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const myutils = require('../myutils')

/* https://localhost/user/ */
const UsersModel = require('./../models/users')

// ----- SIGN UP -----
router.post('/signup', (req, res, next) => {
    UsersModel.findOne({username: req.body.username}).exec()
    .then(user => {
        if(user) return myutils.error(res, 409, 'username exists') // 409, 422
        // else the username doesn't exist
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err) return myutils.error(res, 500, 'data missing on sign up')
            const newUser = new UsersModel ({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password: hash
            })
            newUser.validate( (err) => { // overkill
                if(err) return myutils.error(res, 500, err.message)
                newUser.save()
                .then(result => myutils.message(res, 201, 'user created') )
                .catch(err => myutils.error(res, 500, 'error on creating user'))
            })
        })
    })
    .catch(err => myutils.error(res, 500, err))
})

// ----- LOG IN -----
router.post('/login', (req, res, next) => {
    UsersModel.findOne({username: req.body.username}).exec()
    .then(user => {
        if(user) { // exists
            bcrypt.compare(req.body.password, user.password)
            .then(result => {
                if(result) { // if TRUE, the hashes are equals
                    // 60*60 = 3600 seconds = "1h"
                    const token = jwt.sign(
                        { username: user.username },
                        fs.readFileSync('./keys/key.pem'),
                        { 
                            algorithm: 'RS256',
                            expiresIn: 60 * 60
                        }
                    )
                    res.status(201).json({
                        message: 'logged',
                        token: token
                    })
                }
                else myutils.message(res, 409, 'username or password incorrect')
            })
            .catch(err => myutils.message(res, 409, 'username or password incorrect') )
        }
        else myutils.message(res, 409, 'username or password incorrect') // 409, 422
    })
    .catch(err => myutils.error(res, 500, err))
})

module.exports = router;

