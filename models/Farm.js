import mongoose, { Schema } from "mongoose";

const FarmSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },

    location: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
    staff: [{
        type: Schema.Types.ObjectId,
        ref: "Staff",
    }],

    doctors: [{
        type: Schema.Types.ObjectId,
        ref: "Doctors",
    }],

    farm_manager: {
      type: Schema.Types.ObjectId,
      ref: "FarmManager",
      required: true,
    },
  },
  { timestamps: true }
);

const Farm = mongoose.model("Farm", FarmSchema);
export default Farm;