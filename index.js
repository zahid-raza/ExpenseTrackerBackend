const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("../backend/db/db");
const userRouter = require("./router/userRouter");
const expenseRouter = require("./router/expenseRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);
app.use("/expenses", expenseRouter);

connectDb();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server on :- ${port}`);
});
