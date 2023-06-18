import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import express from "express";
const app = express();

// database
import connectDB from "./db/connectDB.js";

// routes
import bookingRouter from "./routes/bookingRouter.js";

// middleware
import cookieParser from "cookie-parser";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
import notFoundMiddleware from "./middlewares/notFound.js";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/bookingRoom", bookingRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`listening server on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
