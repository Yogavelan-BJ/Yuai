import { config } from "dotenv";
import express from "express";
import { router as chatbotRouter } from "./routers/chatbot.router.js";

config();
const app = express();
app.use(express.json());

app.use("/chatbot", chatbotRouter);

app.listen(8000, () => {
  console.log("Server is Listening on port 8000");
});
