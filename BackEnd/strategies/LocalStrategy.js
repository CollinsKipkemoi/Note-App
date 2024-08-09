const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const User = require("../models/user.model.js");

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found!");
      if (user.password !== password) throw new Error("Incorrect password!");
      console.log(`${user}`)
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  console.log("Serialising user!");
  try {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found!");
    console.log("User found!");
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
