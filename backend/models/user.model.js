import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "alumni", "faculty", "admin", "guest"],
    default: "student",
  },
  mobile: {
    type: String,
  },
});

userSchema.virtual('avatar').get(function() {
  return `https://api.dicebear.com/9.x/personas/svg?seed=${this.email}`;
});

userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

userSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

const User = mongoose.model("User", userSchema);

export default User;
