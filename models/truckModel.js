import mongoose from "mongoose";

const truckSchema = new mongoose.Schema(
    {
        truckName:{
            type:String,
            required: true,
        },
        truckType: {
            type: String,
            required: true,
        },
        truckNumber: {
            type: String,
            required: true,
            unique: true,
        },
        truckCapacity:{
            type: Number,
        },
        truckStatus: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true }
);
export default mongoose.model("truck", truckSchema);