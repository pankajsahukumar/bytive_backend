import express from "express";


const app = express();
import mongoose from "mongoose";
mongoose.set('strictQuery',true);
import userRouter from './routes/user.route.js';



app.use(express.json());
const connect=async ()=>{
try {
  await mongoose.connect('mongodb+srv://Pankaj:Pankaj@cluster0.konix1y.mongodb.net/?retryWrites=true&w=majority');
  console.log("Database is Connected");
} catch (error) {
  console.log(error);
}
}
app.use("/api/user",userRouter);

app.listen(5000,()=>{
    connect();
console.log("Server is running")
})