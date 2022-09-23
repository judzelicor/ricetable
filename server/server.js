import express from "express";
import dotenv from "dotenv";
import path from "path";
import {
    errorHandlerMiddleware,
    notFoundMiddleware
} from "./middlewares/index.js";

dotenv.config({
    path: path.resolve(".env.local")
});

const PORT = process.env.PORT;
const app = express();

// Middleware to handle non-existent routes
app.use("*", notFoundMiddleware);

// Middleware to handle errors in exisiting routes
app.use(errorHandlerMiddleware)

// Allow Express to listen to requests to the server
app.listen(PORT, () => {
    console.log(`Rictable server is listening on port: ${ PORT }`)
});