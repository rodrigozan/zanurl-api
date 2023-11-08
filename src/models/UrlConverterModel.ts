import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Url', urlSchema, 'urls');