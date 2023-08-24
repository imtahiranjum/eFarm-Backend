import mongoose, { Schema } from "mongoose";

const CardInfoSchema = new mongoose.Schema(
  {
    name_on_card: {
        type: String,
        required: true,
      },
    card_number: {
        type: Number,
        required: true,
      },
    cvc: {
        type: Number,
        required: true,
        min: 3,
        max: 3,
      },
    provider: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const CardInfo = mongoose.model("CardInfo", CardInfoSchema);
export default CardInfo;