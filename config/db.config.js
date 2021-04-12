// config.js
const dotenv = require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://127.0.0.1:27017/',
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'test'
}