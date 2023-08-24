import mongoose, { Schema } from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    subject: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
        min: 5
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
export default Question;