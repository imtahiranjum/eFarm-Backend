import mongoose, { Schema } from "mongoose";

const AnswerSchema = new mongoose.Schema(
  {
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

    onSaleCattle: {
        type: Schema.Types.ObjectId,
        ref: "OnSaleCattle",
        required: true,
    },

    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true }
);

const Answer = mongoose.model("Answer", AnswerSchema);
export default Answer;