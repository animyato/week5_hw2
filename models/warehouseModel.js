import mongoose from "mongoose";
import truckModel from "./truckModel.js";
import trailerModel from "./trailerModel.js";

const warehouseSchema = new mongoose.Schema(
    {
        warehouseName:{
            type:String,
            required: true,
        },
        warehouseLocation: {
            type: String,
            required: true,
        },
        warehouseCapacity: {
            type: Number,
            required: true,
        },
        trucksInside: {
            type: [{
                type: mongoose.Schema.Types.Mixed,
                ref: "truckModel",
            }],
        },
        trailersInside: {
            type: [{
                type: mongoose.Schema.Types.Mixed,
                ref: "trailerModel",
            }],
        },
    },
    {timestamps: true }
);
export default mongoose.model("warehouse", warehouseSchema);