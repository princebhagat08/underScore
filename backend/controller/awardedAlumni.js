import awardedAlumniModel from "../models/awardedAlumni.js";

export const getAwardedAlumni = async (req, res) => {
    try {
        const awardedAlumni = await awardedAlumniModel.find();
        res.status(200).json({ data: awardedAlumni });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}