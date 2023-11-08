import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    convertedUrl: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const UrlModel = mongoose.model('Url', urlSchema, 'urls');

export default UrlModel;