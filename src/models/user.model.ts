import { Schema, model } from "mongoose";

// User Schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    credits: {
      type: Number,
      default: 1,
    },
    subscription_type: {
      type: String,
      enum: ["free", "basic", "pro", "enterprise"],
      default: "free",
    },
    preferences: {
      theme: {
        type: String,
        enum: ["light", "dark"],
        default: "light",
      },
      defaultTemplate: String,
      autoSave: {
        type: Boolean,
        default: true,
      },
      showTutorials: {
        type: Boolean,
        default: true,
      },
    },
    total_projects: {
      type: Number,
      default: 0,
    },
    total_exports: {
      type: Number,
      default: 0,
    },
    last_login: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
