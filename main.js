import express from "express";

const app = express();

app.use(express.json());

// xamidullo.com/

app.get("/", (req, res) => {
  res.send("Assalomu alaykum");
});

app.get("/greet", (req, res) => {
  res.send("SALOM AWS");
});

app.use((req, res) => {
  res.send("TOPILMADI!!!");
});

app.listen(4000, () => {
  console.log("Server runnin on port 4000");
});
