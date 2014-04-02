var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CLIENT_CALLBACKURL 
  },
  function(accessToken, refreshToken, profile, done) {
    console.warn(accessToken);
	console.warn(refreshToken);
	console.warn(profile);
    done(null, profile);
  })
);

module.exports.passport = passport;
