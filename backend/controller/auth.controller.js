import User from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/config.js";

export const signinToken = async user => {
  return jsonwebtoken.sign(
    { _id: user._id, role: user.role, name: user.name, avatar: user.avatar },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    }
  );
};

export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    const token = await signinToken(user);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = await signinToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
