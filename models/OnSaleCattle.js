import mongoose, { Schema } from "mongoose";

const OnSaleCattleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    breed: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },

    is_boarded: {
      type: Boolean,
    },

    category: {
      type: String,
    },

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

    images: [
      {
        type: String,
      },
    ],

    seller_info: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },

    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  { timestamps: true }
);

const OnSaleCattle = mongoose.model("OnSaleCattle", OnSaleCattleSchema);
export default OnSaleCattle;
