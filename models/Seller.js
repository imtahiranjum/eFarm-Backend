import mongoose, { Schema } from "mongoose";

const SellerSchema = new mongoose.Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    },

    name: {
      type: String,
      required: true,
    },

    display_name: {
      type: String,
    },

    description: {
      type: String,
    },
    
    rating: {
      type: Number,
    },

    contact_info: {
      phone_number: {
        type: Number,
      },
      location: {
        latitude: {
          type: String,
        },
        longitude: {
          type: String,
        },
      },
      address: {
        type: String,
      },
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    expired_boarding_services: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExpiredBoardingService",
      },
    ],
    expired_cattle_on_sale: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExpiredOnSaleCattle",
      },
    ],
    boarding_services: [
      {
        type: Schema.Types.ObjectId,
        ref: "BoardingService",
      },
    ],
    cattle_on_sale: [
      {
        type: Schema.Types.ObjectId,
        ref: "OnSaleCattle",
      },
    ],
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", SellerSchema);
export default Seller;
