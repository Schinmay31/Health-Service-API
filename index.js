import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { connectDB } from "./config/database.js";
import serviceRoutes from "./routes/serviceRoutes.js"

dotenv.config();
connectDB();

const app= express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', serviceRoutes);

app.listen(3200,() => {
    console.log(`server started on port 3200`);
})