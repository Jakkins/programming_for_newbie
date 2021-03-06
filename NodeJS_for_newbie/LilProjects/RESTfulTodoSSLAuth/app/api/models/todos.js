const mongoose = require('mongoose')

/*
    one todo has:
        - pk (_id)
        - description
        - groupId
        - usernameCreator
*/
const todosSchema = new mongoose.Schema({
    _id: { 
        type: String, 
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    groupId: {
        type: String, 
        required: true
    },
    usernameCreator: { 
        type: String, 
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Todos', todosSchema)