import mongoose, { Schema } from "mongoose";

const FeedRecordSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const FeedRecord = mongoose.model("FeedRecord", FeedRecordSchema);
export default FeedRecord;