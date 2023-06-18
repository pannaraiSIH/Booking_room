import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    trim: true,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    minlength: 3,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Please provide password"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = async function () {
  const token = await jwt.sign(
    { userId: this._id, name: this.name, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  return token;
};

UserSchema.methods.comparePassword = async function (incomingPassword) {
  const isPasswordCorrect = await bcrypt.compare(
    incomingPassword,
    this.password
  );
  return isPasswordCorrect;
};

export default mongoose.model("User", UserSchema);
