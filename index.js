const express = require('express');
const Joi = require('joi');
const logger = require('./middleware/logger');
const config = require('config');
const courses = require('./routes/courses');
const db = require('./database');

const app = express();

// config
/**
 * on mac export NODE_ENV=dev
 */

app.use(express.json());
app.use(logger);
app.use('/api/courses', courses);

db.query('SELECT first_name FROM employees_dev', (err, rows, fields) => {
    if (err) throw err;
    console.log(rows[0]);
});

db.end();

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));