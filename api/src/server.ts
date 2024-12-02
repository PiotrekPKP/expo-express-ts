import express, { urlencoded, json } from "express";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

export default app;
