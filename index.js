const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// Creates new instance of  the google strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
    console.log('Acccess Token:', accessToken);
    console.log('Refresh Token:', refreshToken);
    console.log('profile:', profile);
    }
  )
);

//Route handler

app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));


// Passport Handle the Authenticate
app.get('/auth/google/callback', passport.authenticate('google'))


const PORT = process.env.PORT || 5000;
app.listen(PORT);