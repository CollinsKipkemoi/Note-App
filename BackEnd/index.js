const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow all origins
  })
);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} `);
});
