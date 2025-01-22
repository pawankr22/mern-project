import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
