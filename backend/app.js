const express = require('express');

const morgan = require('morgan');

const { connectDB, app } = require('./connectDB');

const UserRoutes = require('./routes/Users');

const AuthRoutes = require('./routes/Auth');

const PostRoutes = require('./routes/Posts');

const dotenv = require('dotenv');

dotenv.config();

connectDB();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/users', UserRoutes);

app.use('/api/auth', AuthRoutes);

app.use('/api/posts', PostRoutes);
