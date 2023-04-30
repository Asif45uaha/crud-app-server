import mongoose from "mongoose";
mongoose.set("strictQuery", true);
import dotenv from 'dotenv'
dotenv.config()
const Connection = async () => {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern.rue2u5r.mongodb.net/?retryWrites=true&w=majority`;
    try {
        const res = mongoose.connect(URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        if (res) {
            console.log("Database connected Successfully!!");
        }
    } catch (error) {
        console.log("Error while Connecting to database!!!");
    }
};

export default Connection;