const express = require('express');
const path =require('path');
const app = express();
const cookie_parser =require('cookie-parser');
const session=require("express-session");
const passport=require("passport");
const passportjwt=require('./config/passport-jwt-strategy');
const MongoStore = require('connect-mongo');
const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(cookie_parser());
app.use('/', require('./routes/index'))
app.use(session({
    name: 'Ecom',
    secret: 'bangbange',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 1000),
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/Ecom',
        autoRemove: 'disabled',
    },
        function (err) {
            console.log(err || 'store connection ok')

        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.listen(port, function (err) {
    if (err)
        console.log('Error :', err);
    else
        console.log(`Server is running on port:${port}`);
});