import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Blog = new Schema(
  {
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    // price: { type: String, required: true }
    // github_url: { type: String, required: true },
    // deployed_url: { type: String, required: true }
  },
  { timestamps: true },
)

export default mongoose.model('blogs', Blog)