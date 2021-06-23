const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const myutils = require('../myutils')

const Todos = require('./../models/todos')

// ----- PERSONAL -----
router.get('/', (req, res, next) => {
    console.log(req.userData)
    if(req.userData) {
        Todos.find({ 
            usernameCreator: req.body.username,
            groupId: 'personal'
        }).exec()
        .then(result => {res.status(200).json(result)})
        .catch(err => myutils.error(err, 500, res))
    }
    else myutils.message(res, 500, 'login first')
})

router.post('/', (req, res) => {
    if(req.userData) {
        const newTodos = new Todos ({
            _id: new mongoose.Types.ObjectId(),
            description: req.body.description,
            groupId: 'personal',
            usernameCreator: req.body.username
        })
        newTodos.validate( (err) => {
            if(err) return myutils.error(res, 500, err.message)
            newTodos.save()
            .then(result => res.status(201).json({
                message: 'todo created'
            }))
            .catch(err => myutils.error(res, 500, 'error on creating user'))
        })
    }
    else myutils.message(res, 500, 'login first')
})

// ----- GROUP -----

router.get('/:groupId', (req, res, next) => {
    if(req.userData) {
        
    }
    else myutils.message(res, 500, 'login first')
})

module.exports = router;