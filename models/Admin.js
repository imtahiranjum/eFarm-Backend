import mongoose, { Schema } from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    farms: [{
        type: Schema.Types.ObjectId,
        ref: "Farm",
    }],

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
    
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;