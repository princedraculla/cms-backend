const mongoose = require("mongoose");

const { Schema, model } = new mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    admin: Boolean,
    createdAt: Date,
    updatedAt: Date
})