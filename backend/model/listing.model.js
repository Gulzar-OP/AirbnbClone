import mongoose from 'mongoose'

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  host: { type: mongoose.Schema.Types.ObjectId,ref:"User", required: true },
  images1: { type: String, required: true },
  images2: { type: String, required: true },
  images3: { type: String, required: true },
  rent: { type: Number, required: true },
  price: { type: Number, required: true },
  city: { type: String, required: true },
  landMark: { type: String, required: true },
  category: { type: String, required: true },
  isBooked: { type: Boolean, required: false },

  createdAt: { type: Date, default: Date.now },
},{timestamps:true});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;