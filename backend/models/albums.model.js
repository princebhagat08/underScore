import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    images: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("Album", albumSchema);