import mongoose, { Schema } from "mongoose";

const FeedSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },

    quantity: {
        type: Number,
        required: true,
        
      },
    feed_record: [{
        type: Schema.Types.ObjectId,
        ref: "FeedRecord",
    }],
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", FeedSchema);
export default Feed;