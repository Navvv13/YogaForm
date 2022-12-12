import mongoose from "mongoose";

const YogaSchema = new mongoose.Schema({
    name:String,
    phoneNumber:Number,
    email:String,
    age:Number,
    gender:String,
    slot:String,
})

export default mongoose.model('Yoga',YogaSchema);