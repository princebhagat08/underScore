import Team from "../team/team.model.js";

export const isManager = async (req, res, next) => {
    const role = req.user.role;
    if (role !== "manager") {
        return res.status(403).json({ message: "You are not authorized to access this resource" });
    }
    next();
};