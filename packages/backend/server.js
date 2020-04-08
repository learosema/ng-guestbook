const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 1337;
const DB_FILE = "guestbook.json";

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

function getPosts() {
  if (!fs.existsSync(DB_FILE)) {
    return [];
  } else {
    const data = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
    if (data instanceof Array) {
      return data;
    }
    return [];
  }
}

app.get("/api/guestbook", (req, res) => {
  res.json(getPosts());
});

app.post("/api/guestbook", (req, res) => {
  const post = {
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
    message: req.body.message,
    date: new Date().toISOString(),
  };
  fs.writeFileSync(DB_FILE, getPosts().concat(post), "utf8");
});

app.listen(PORT, HOST, () =>
  console.log(`Backend listening on http://${HOST}:${PORT}/`)
);
