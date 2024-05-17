const express = require('express');

const morgan = require('morgan');

const dotenv = require('dotenv');

const multer = require('multer');

const path = require('path');

const { connectDB, app } = require('./connectDB');

const UserRoutes = require('./routes/Users');

const AuthRoutes = require('./routes/Auth');

const PostRoutes = require('./routes/Posts');

dotenv.config();

connectDB();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')));

app.use('/api/users', UserRoutes);

app.use('/api/auth', AuthRoutes);

app.use('/api/posts', PostRoutes);
