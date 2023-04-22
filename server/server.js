const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/database");

dotenv.config({ path: "./.env" });

connectDB(process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
