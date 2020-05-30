import express, { Request, Response } from "express";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import AppRouter from "./AppRouter";
import "./controllers";
const app = express();
app.use(bodyParser({ extended: true }));
app.use(cookieSession({ keys: ["asdfjlj"] }));
app.use(AppRouter.getInstance());

app.listen(3000, () =>
  console.log("Server running on: http://localhost:3000/")
);
