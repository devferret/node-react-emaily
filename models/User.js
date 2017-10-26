const mongoose = require('mongoose')
const { Schema } = mongoose

// Setting schema for mongoDB
const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String
})

mongoose.model('users', userSchema)