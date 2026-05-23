import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import menuItem from "./models/menuItem.js";

import personRoutes from "./routes/personRoutes.js";
import menuRoutes from './routes/menuRoutes.js'

connectDB();

const app = express();
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// learn about git and github 



app.use("/person", personRoutes);
app.use("/menu", menuRoutes);






app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); 





