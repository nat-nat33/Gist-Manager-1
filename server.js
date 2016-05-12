'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT || 3000;

const auth = require('./routes/auth');


const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
  secret : process.env.SECRET_KEY || 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, 'public')));


//app.use('/api/gists', gists);
app.use('/auth', auth);

app.get('/', (res, req) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});