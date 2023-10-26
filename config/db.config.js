require("dotenv").config();

const mongoDbUri = process.env.MONGODB_URI;
module.exports = { mongoDbUri };
