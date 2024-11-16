import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        enum: ['full-time', 'part-time', 'contract', 'internship'],
        required: true,
    },
    publishedOn: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    company: {
        type: String,
        ref: "Company",
    },
    applicantsCount: {
        type: Number,
        default: 0,
    },
    jobStatus: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open',
    },
    jobCategory: {
        type: String,
        enum: ['software', 'marketing', 'finance', 'sales', 'design', 'others'],
        default: 'others',
    },
    requiredSkills: {
        type: [String],
        default: [],
    },
    minExperience: {
        type: Number,
        min: 0,
        default: 0,
    },
});

export default mongoose.model("Job", jobSchema);
