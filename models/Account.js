import mongoose, { Schema } from "mongoose";

const AccountSchema = new mongoose.Schema(
  {
    payment_method: {
        type: String,
      },

    card_info: [{
        type: Schema.Types.ObjectId,
        ref: "CardInfo",
    }],
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", AccountSchema);
export default Account;