import mongoose, { Schema } from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    subject: {
        type: String,
    },

    description: {
        type: String,
        required: true,
        min: 5
    },

    answer: {
        type: String,
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