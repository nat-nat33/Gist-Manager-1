const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const config = require('../config/config');

function setUpPassport() {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new GitHubStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    console.log(profile);
    return done(null, profile);
  }
));

}

module.exports = setUpPassport;