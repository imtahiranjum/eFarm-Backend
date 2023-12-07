import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      first_name:{
        type: String,
        min: 2,
        max: 100,
      },  

      last_name:{
        type: String,
        min: 2,
        max: 100,
      },
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },

    roles: [{
        type: String  
    }],

    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;