const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const dbhandler = require('./handler/dbhandler');
const routes = require('./routes/default_routes');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set('view engine', 'ejs');

//connect to db
app.listen(3000, async () => {
  await dbhandler.connectToDatabase('mongodb://127.0.0.1:27017/', 'node-auth');
  console.log('Connected to DB');
});

//Routes
app.use(routes);

app.use((req, res) => {
  res.status(404).render('404');
});
