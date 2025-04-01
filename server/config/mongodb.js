import mongoose from "mongoose";

const connectDB = async () =>{

    try {
        mongoose.connection.on('connected', ()=> console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/Mern-auth`)
    } catch (error) {
        console.log('MongoDB Connection error', error.message);
        process.exit(1)
        
    }
}

export default connectDB