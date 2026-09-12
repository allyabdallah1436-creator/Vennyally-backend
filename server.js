const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vivian backend iko tayari ❤️");
});

app.post("/vivian", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({
      error: "Ujumbe haupo"
    });
  }

  res.json({
    reply: "Nimepokea: " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Vivian backend imeanza kwenye port " + PORT);
});
