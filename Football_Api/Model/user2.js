const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
       
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    }
   
},{ collection: 'user2' }
)
const User = mongoose.model('User', userSchema)

module.exports = User