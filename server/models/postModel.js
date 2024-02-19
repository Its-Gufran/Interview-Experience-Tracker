import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
          trim: true,
        },
        description: {
          type: String,
          required: true,
        },
        image_url: {
          type: String,
        },
        likes: {
          type: Number,
          default: 0,
        },
        company_name: {
          type: String,
          required: true,
        },
        package: {
          type: String,
          required: true,
        },
        date_time: {
          type: Date,
          required: true,
        },
        status: {
          type: String,
          required: true,
          enum: ["scheduled", "completed", "cancelled", "postponed"], // Example statuses
        },
      },
      { timestamps: true }
);

export default mongoose.model("post", postSchema);
