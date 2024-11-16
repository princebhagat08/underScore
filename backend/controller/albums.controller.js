import albumModel from "../models/albums.model.js";

export const getAlbums = async (req, res) => {
    try {
        const albums = await albumModel.find();
        res.status(200).json({ data: albums });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}