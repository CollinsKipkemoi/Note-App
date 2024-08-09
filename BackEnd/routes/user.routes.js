const express = require("express");
const { registerUser, loginUser, getUser, getAllUsers} = require("../controllers/user.controller");
require("../strategies/LocalStrategy");
const passport = require("passport");

const router = express.Router();

router.use(express.json());

router.post("/register", registerUser);
router.post("/login", passport.authenticate("local") ,loginUser);
router.get("/user/:userId", getUser);
router.get("/users", getAllUsers);
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) return next(err);
        return res.json({message: "Logged out!"});
    })
});
router.get("/check", (req, res) => {
    console.log("Checking!");
    if(!req.user) return res.json({message: "No user found!"});
    return res.json(req.user);
} );

module.exports = router;
