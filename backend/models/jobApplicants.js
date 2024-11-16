import mongoose from "mongoose";

const jobApplicantsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumni",
    },  
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
    },
});

export default mongoose.model("JobApplicants", jobApplicantsSchema);