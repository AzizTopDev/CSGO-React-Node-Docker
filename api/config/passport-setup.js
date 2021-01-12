const passport = require('passport');
const SteamStrategy = require('passport-steam');
const keys = require('./keys');
const User = require('../models/User');

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     User.findById(id).then((user) => {
//         done(null, user);
//     })
// });

passport.use(new SteamStrategy({
    returnURL: `${process.env.BASE_URL}/auth/steam/return`,
    realm: `${process.env.BASE_URL}/`,
    apiKey: process.env.STEAM_API_KEY,
}, (identifier, profile, done) => {
    const steamId = profile._json.steamid;
    const name = profile.displayName;
    const image = profile._json.avatarmedium;
    User.findOne({ steamId: steamId }).then((currentUser) => {
        if (currentUser) {
            // already have user
            console.log("------- USER IS : ", currentUser);
            return done(null, currentUser);
        } else {
            // create new user into database
            new User({
                username: name,
                steamId: steamId,
                image: image
            }).save().then((newUser) => {
                console.log("-------- NEW USE CREATED : ", newUser);
                return done(null, newUser);
            });
        }
    });
}
));