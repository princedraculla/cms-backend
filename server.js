const express = require('express')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose')






mongoose
    .connect("mongodb://127.0.0.1:27017/cms-backend")
    .then(() => {
        app.listen(PORT, () => console.log(`server is running at localhost:${PORT}`))
    })
    .catch((error) => {
        console.log("error occurred", error)
    });

    