import mongoose from "mongoose";

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.DB)
        console.log("Database Connect");
    }
    catch (error){
        console.log(error);
    }
}

export default connectDb;