const express = require("express");

const app = express();

const port = process.env.PORT || 8000;
app.listen(port, () => `Server is up and running on port ${port}`);
