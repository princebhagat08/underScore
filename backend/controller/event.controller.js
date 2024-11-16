import eventModel from "../models/event.model.js";

export const getEvents = async (req, res) => {
    try {
        const events = await eventModel.find();
        res.status(200).json({ data: events });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}