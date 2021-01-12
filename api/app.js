const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const steamAuthRoute = require('./routes/steamAuthRoute');
const indexRoutes = require('./routes/api');
const passportSetup = require('./config/passport-setup');
const chalk = require('chalk');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(cors());
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.session.cookieKey]
// }));
app.use(express.json());

// initialize passport
app.use(passport.initialize());

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(chalk.bgBlue('connected to mongodb')));

// setup routes
app.use('/auth', steamAuthRoute);
app.use('/api', indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.bgBlue("Sever is listening for requests on port : " + PORT));
});