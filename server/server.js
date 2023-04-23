const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const connectDB = require("./config/database");
const apiv1Router = require("./routes/rootRouter");

connectDB(process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1", apiv1Router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
