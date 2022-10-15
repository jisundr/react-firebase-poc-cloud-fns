import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";

const app = express();
app.use(cors({ origin: true }));
app.use(morgan("common"));

app.get("/ping", (_, res) => {
  res.json({ message: "pong!" });
});

app.get("/users/info", (_, res) => {
  res.json({ name: "Jayson" });
});

export const api = functions.https.onRequest(app);
