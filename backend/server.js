import { config } from "dotenv";
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import { router as chatbotRouter } from "./routers/chatbot.router.js";

config();
const app = express();
app.use(cors());
app.use(express.json());

// app.use(clerkMiddleware());

// const withAuth = (req, res, next) => {
//   const { userId } = req.auth;
//   req.auth = userId ? auth : {};
//   next();
// };

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/chatbot", chatbotRouter);

app.listen(8000, () => {
  console.log("Server is Listening on port 8000");
});
