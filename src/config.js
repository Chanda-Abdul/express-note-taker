const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    PORT: process.env.PORT || 8001,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL,
    TEST_DB_URL: process.env.TEST_DB_URL
}