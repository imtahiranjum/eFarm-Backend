import mongoose, { Schema } from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    subscription: {
        salary: {
            type: Number,
        },

        subscription_type: {
            type: Number,
        },
        
    },
    
    city: {
        type: String,
        required: true,
      },

    state: {
        type: String,
    },

    country: {
        type: String,
        required: true,
    },

    phone_number: {
        type: String,
        required: true,
    },

    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;