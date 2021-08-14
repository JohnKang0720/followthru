const express = require('express');
const app = express();
const env = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

env.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});