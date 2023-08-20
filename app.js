const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/admin', require('./routes/admin'));
app.use('/api/about_me', require('./routes/about_me'));
app.use('/api/my_skills', require('./routes/my_skills'));
app.use('/api/my_project', require('./routes/my_project'));
app.use('/api/my_experience', require('./routes/my_experience'));
app.use('/api/my_biography', require('./routes/my_biography'));
app.use('/api/my_biography/courses', require('./routes/courses'))
app.use('/api/my_blog', require('./routes/my_blog'));
app.use('/api/my_contacts', require('./routes/my_contacts'));
module.exports = app;
