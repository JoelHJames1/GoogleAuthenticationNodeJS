const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
