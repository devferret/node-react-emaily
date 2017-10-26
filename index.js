const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./models/User')
require('./services/passport')

// Binding to our DB wth specific uri
mongoose.connect(keys.mongoURI)

const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

// Dynamic PORT binding
// Define PORT provide from HUROKU or 5000 by default
const PORT = (process.env.PORT || 5000)

// Excute express app
app.listen(PORT)