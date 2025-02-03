require('dotenv').config();
const {initializeFirestoreAdminApp} = require('./src/database/firebase');
initializeFirestoreAdminApp();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes/routes');
const config = require('./src/config/config');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

app.use('/', routes);

app.use(morgan('dev'))

app.listen(config.port, () => {
    console.log(`Serverul ruleaza pe portul: ${config.port}`);
});
