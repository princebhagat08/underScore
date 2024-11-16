import Banner from "../models/banner.model.js";


export const getBanners = async (req, res) => {
   try {
    const banners = await Banner.find();
    res.status(200).json({data: banners});
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
}
