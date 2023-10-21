import mongoose, { Schema } from "mongoose";

const BuyerSchema = new mongoose.Schema(
  {
    cattle_likes: [
      {
        on_sale_cattle_id: {
          type: Schema.Types.ObjectId,
          ref: "OnSaleCattle",
        },
      },
    ],

    farm_likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Farm",
        unique: true,
      },
    ],

    cattle_boarding_service_likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "BoardingService",
        unique: true,
      },
    ],
    
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
