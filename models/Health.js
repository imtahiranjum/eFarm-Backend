import mongoose, { Schema } from "mongoose";

const HealthSchema = new mongoose.Schema(
  {
    is_vaccinated: {
        type: Boolean,
        required: true,
      },

    temperature: {
        degree: {
            type: Number,
            required: true,
        },
        unit_of_measuring: {
            type: String
        },
      },
    health_record: [{
        type: Schema.Types.ObjectId,
        ref: "HealthRecord",
    }],
  },
  { timestamps: true }
);

const Health = mongoose.model("Health", HealthSchema);
export default Health;