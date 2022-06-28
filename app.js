const express = require("express");
const morgan = require("morgan");
const app = express();
const router = require("./routes/gift-exchange");
const { NotFoundError } = require("./utils/errors");
// const { BadRequestError } = require("../utils/errors");
// const GiftExchange = require("../models/gift-exchange");

app.use(morgan("tiny"));
app.use(express.json());

const port = 3001;
// app.listen(port, () => {
//   console.debug("App listening on :3000");
// });
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/gift-exchange", router);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
