const passport = require('passport');

// Allows to export functions
module.exports = app => {
    //Route handler
    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email']
    }));

    // Passport Handle the Authenticate
    app.get('/auth/google/callback', passport.authenticate('google'))
};