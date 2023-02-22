const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const crudRouter = require('./routes/crud_routes');
const userRouter = require('./routes/user_router');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://maxi:NtnEx8V5C2KbyBc@cluster0.wgmtw.mongodb.net/userAdmin?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api', crudRouter);
app.use('/api/auth', userRouter);

module.exports = app;