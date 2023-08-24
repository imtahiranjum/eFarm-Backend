import mongoose, { Schema } from "mongoose";

const StaffSchema = new mongoose.Schema(
    {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    
    designation: {
        type: String,
        required: true,
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

  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", StaffSchema);
export default Staff;