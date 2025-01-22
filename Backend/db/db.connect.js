import mongoose from "mongoose";

const dbToConnect = async () => {
    try {
        console.log("Trying connecting to database");
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to Databse");
    } catch (error) {
        console.log(error);
    }

}
export { dbToConnect }
