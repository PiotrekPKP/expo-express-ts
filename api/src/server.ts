import express, { urlencoded, json } from "express";
import { zodCheck } from "./middlewares/zod.js";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

export default app;
