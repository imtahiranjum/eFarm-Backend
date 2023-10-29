import mongoose from "mongoose";

const BoardingServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },

    services: [
      {
        type: String,
        min: 10,
        max: 500,
      },
    ],

    location: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },

    details: {
      type: String,
      min: 10,
      max: 500,
    },
  },
  { timestamps: true }
);

const BoardingService = mongoose.model(
  "BoardingService",
  BoardingServiceSchema
);
export default BoardingService;
