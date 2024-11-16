import newsAndStoriesModel from "../models/newAndStories.js";

export const getNewsAndStories = async (req, res) => {
    const newsAndStories = await newsAndStoriesModel.find();
    res.status(200).json({ data: newsAndStories });
}