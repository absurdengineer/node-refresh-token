const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ApiRouter = require("./routers/api.router");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", ApiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port : ${port}`);
  console.log(`Development server started at : http://localhost:${port}/`);
});
