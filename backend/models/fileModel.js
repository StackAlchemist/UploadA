import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number, // Size in bytes
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

export const File = mongoose.model('uploads', uploadSchema);


