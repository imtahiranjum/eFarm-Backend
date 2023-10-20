import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    profile_image: {
      type: String,
    },

    bio: {
      type: String,
    },

  },

  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
