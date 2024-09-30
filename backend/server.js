import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import { connectDb } from './config/db.js';

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

app.use(express.json()); // allow us to parse the req body

app.use("/api/products",productRoutes);

console.log(process.env.MONGO_URI);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,"/frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
    })
}

app.listen(PORT,()=>{
    connectDb();
    console.log(`Server is running at ${PORT}`);
})
