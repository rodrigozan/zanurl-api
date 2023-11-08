import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
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
        required: true
    }
}, {
    timestamps: true
});

const UrlModel = mongoose.model('Url', urlSchema, 'urls');

export default UrlModel;