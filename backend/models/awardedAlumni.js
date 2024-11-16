import mongoose from "mongoose";

const awardedAlumniSchema = new mongoose.Schema({
    alumni: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    award: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("AwardedAlumni", awardedAlumniSchema);