const express = require("express");
const morgan = require("morgan");
const app = express();
const { NotFoundError } = require("./util/errors");

app.use(morgan("tiny"));
app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.debug("App listening on :3000");
});
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/gift-exchange", router);
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const stats = error.status || 500;
  const message = error.message;

  return res.status(stats).json({
    error: { message, stats },
  });
});

module.exports = app;
