import express from "express";
import mongoose from "mongoose";


const app = express();
const port = process.env.PORT || 8001;






app.get("/", (req, res) => res.status(200).send("HELLO WORLD"));
app.listen(port, () => console.log(`listening on localhost: ${port}`));