const mongoose = require("mongoose");

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
        job_role: {
          type: String,
          require: true,
        },
        status: {
          type: String,
          required: true,
          enum: ["selected", "rejected"], // Example statuses
        },
        overall_experience: {
          type: String,
          require: true,
        },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);



//overall experience
//job role
