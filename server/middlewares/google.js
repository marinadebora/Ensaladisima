var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require("../src/modelos/Usuarios")

const emails = ["samirjose675@gmail.com"]

passport.use("auth-google", new GoogleStrategy({
    clientID: "670818911101-b0rnhun1enn4kvisuk4a1eh6cr6pn3qn.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: 'http://localhost:4000/autenticar/google'
  },
  async function (accessToken, refreshToken, profile, done) {
    const response = await User.findOne({email: profile.emails[0].value})
    
    if (response) {
        done (null, response)
    } else {
        User.create({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName?.length > 0 ? profile.name.familyName : " ",
            email: profile.emails[0].value,
            password: profile._json.sub
        })
        done(null, profile)
    }
  }
)
) 