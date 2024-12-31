import mongoose from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://kavalipavan22:ajHBzi3uOwtaY0jo@cluster0.owsfl.mongodb.net/blog-app');
    console.log("DB Connected");
}