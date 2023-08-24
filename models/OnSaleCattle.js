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
        required: true,
        min: 10,
    },
    
    contact: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },
    
    price: {
        type: Number,
        required: true,
    },

    cattle_info: {
        type: Schema.Types.ObjectId,
        ref: "Cattle",
        required: true,
      },

    questions: [{
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      }],
  },
  { timestamps: true }
);

const OnSaleCattle = mongoose.model("OnSaleCattle", OnSaleCattleSchema);
export default OnSaleCattle;