import mongoose from "mongoose";

const trailerSchema = new mongoose.Schema(
    {
        trailerName:{
            type:String,
            required: true,
        },
        trailerType: {
            type: String,
            required: true,
        },
        trailerNumber: {
            type: String,
            required: true,
            unique: true,
        },
        trailerCapacity:{
            type: Number,
        },
        trailerStatus: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true }
);
export default mongoose.model("trailer", trailerSchema);