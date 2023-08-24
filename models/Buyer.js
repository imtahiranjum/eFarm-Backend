import mongoose, { Schema } from "mongoose";

const BuyerSchema = new mongoose.Schema(
  {
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

    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Buyer = mongoose.model("Buyer", BuyerSchema);
export default Buyer;