import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    college: {
        type: String,
    },
    yearOfGraduation: {
        type: Date,
    },
    yearOfJoining: {
        type: Date,
    },
    department: {
        type: String,
    },
    roleNumber: {
        type: String,
    },
    course: {
        type: String,
    },
    currentPosition: {
        type: String,
        enum: ["workingAsProfessional", "pursuingHigherStudies", "other"],
    },
    skills: [{
        type: String,
    }],
    workDetails: [{
        workTitle: {
            type: String,
        },
        companyName: {
            type: String,
        },
        industry: {
            type: String,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        currentlyWorking: {
            type: Boolean,
        },
    }],
    achievements: [{
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        date: {
            type: Date,
        },
    }],
    certifications: [{
        title: {
            type: String,
        },
        issuingOrganization: {
            type: String,
        },
        issueDate: {
            type: Date,
        },
        expirationDate: {
            type: Date,
        },
    }],
    extraCurriculars: [{
        activityName: {
            type: String,
        },
        role: {
            type: String,
        },
        description: {
            type: String,
        },
        duration: {
            type: String, 
        },
    }],
    location: {
        type: String, 
    },
    bio: {
        type: String,
        maxlength: 500,
    },
    socialMediaLinks: {
        twitter: {
            type: String,
        },
        github: {
            type: String,
        },
        linkedin: {
            type: String,
        },
    },
}, {
    timestamps: true, 
});

export default mongoose.model("Alumni", alumniSchema);
