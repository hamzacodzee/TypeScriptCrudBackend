import mongoose from 'mongoose';
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USERNAME = process.env.DB_USERNAME
const mongoURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.csq7air.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!");
    } catch (error: any) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};  

export default connectToMongo;