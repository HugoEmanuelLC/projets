const express = require('express');
const bodyParser = require('body-parser');

const routeIndex = require('./routes/index');
// const userRouter = require('./routes/user_router');
// const path = require('path');

const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api', routeIndex);
// app.use('/api/auth', userRouter);

module.exports = app;