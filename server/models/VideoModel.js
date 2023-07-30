import mongoose from "mongoose";

const Video = mongoose.Schema({
  video_title: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
  product: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      thumbnail_url: {
        type: String,
        required: true,
      },
      product_link: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Videos", Video);
