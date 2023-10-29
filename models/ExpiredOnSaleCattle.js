import mongoose, { Schema } from "mongoose";

const OnSaleCattleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      min: 10,
    },

    contact: {
      type: String,
    },

    category: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    images: [{
      type: String,
    }],
    
    questions: [{
      type: Schema.Types.ObjectId,
      ref: "Question",
    }],

    cattle_info: {
      type: Schema.Types.ObjectId,
      ref: "Cattle",
      required: true,
    },
  },
  { timestamps: true }
);

const OnSaleCattle = mongoose.model("OnSaleCattle", OnSaleCattleSchema);
export default OnSaleCattle;
