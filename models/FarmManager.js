import mongoose, { Schema } from "mongoose";

const FarmManagerSchema = new mongoose.Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    designation: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
      },

    state: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
    },

  },
  { timestamps: true }
);

const FarmManager = mongoose.model("FarmManager", FarmManagerSchema);
export default FarmManager;