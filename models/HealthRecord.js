import mongoose, { Schema } from "mongoose";

const HealthRecordSchema = new mongoose.Schema(
  {
    date_and_time: {
        type: Date,
        required: true,
      },

      is_vaccinated: {
        type: Boolean,
        required: true,
      },

    temperature: {
        type: Number,
        required: true,
        unit_of_measuring: String,
      },
  },
  { timestamps: true }
);

const HealthRecord = mongoose.model("HealthRecord", HealthRecordSchema);
export default HealthRecord;