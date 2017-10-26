const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

// Encoding user for deserialize
passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

// Tell Google we need access with Passport
// By define Google strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleCilentID,
        clientSecret: keys.googleCilentSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // Check exist user before add new one
        User.findOne({ googleId: profile.id }).then(
            (existingUser) => {
                if (existingUser) {
                    // We alresdy have this user ID
                    done(null, existingUser)
                } else {
                    // We have no this user ID
                    new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value
                    })
                    .save()
                    .then(
                        (user) => { done(null, user) }
                    )
                }
            }
        )
    })
)