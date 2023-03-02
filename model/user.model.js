import mongoose from "mongoose";
const { Schema } = mongoose;
const addressSchema = new Schema({
  address: {
    city: String,
    street: String,
    suites: String,
    zipcode: String,
  },
});
const userSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  company: { type: Object, required: true },
  like:{
    type:Number,
  }
});

export default mongoose.model('User',userSchema)