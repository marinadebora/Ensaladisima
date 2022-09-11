var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require("../src/modelos/Usuarios")
let dotenv = require("dotenv")
dotenv.config()



const { GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET } = process.env;

passport.use("auth-google", new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/auth/google'
  },
  async function (accessToken, refreshToken, profile, done) {
    const response = await User.findOne({email: profile.emails[0].value})
    if (response) {
      done (null, response)
    } else {
      
      User.create({
        
        firstName: profile.name.givenName,
        lastName: profile.name.familyName?.length > 0 ? profile.name.familyName : "",
        email: profile.emails[0].value,
        password: profile._json.sub
      })

        done(null, profile)
    }
  }
)
) 