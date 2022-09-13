import mongoose from "mongoose";

const connection = () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
}

export default connection;