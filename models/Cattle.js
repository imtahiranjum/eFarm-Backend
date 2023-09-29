import mongoose, { Schema } from "mongoose";

const CattleSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        required: true,
    },

    images: {
      type: Array,
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
      required:true,
    },

    is_boarded: {
        type: Boolean,
      },
      
    category: {
      type: String
    },
    
    is_onsale: {
      type: Boolean
    },

    health: {
        type: Schema.Types.ObjectId,
        ref: "Health",
      },

    feed: {
        type: Schema.Types.ObjectId,
        ref: "Feed",
      },

    device: {
        type: Schema.Types.ObjectId,
        ref: "Device",
      },

    farm: {
      type: Schema.Types.ObjectId,
      ref: "Farm",
    },
  },
  { timestamps: true }
);

const Cattle = mongoose.model("Cattle", CattleSchema);
export default Cattle;