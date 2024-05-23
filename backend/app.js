const express = require('express');

const morgan = require('morgan');

const dotenv = require('dotenv');

const multer = require('multer');

const path = require('path');

const cookieParser = require('cookie-parser');

const { connectDB, app } = require('./connectDB');

const UserRoutes = require('./routes/Users');

const AuthRoutes = require('./routes/Auth');

const PostRoutes = require('./routes/Posts');

const { verifyJwt } = require('./middleware/verifyJwt');

dotenv.config();

connectDB();

app.use(cookieParser());

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')));

app.use('/api/auth', AuthRoutes);

app.use('/api/users', verifyJwt, UserRoutes);

app.use('/api/posts', verifyJwt, PostRoutes);
