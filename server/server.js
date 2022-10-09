import express from "express";

import { 
    resolve 
} from "path";

import dotenv from "dotenv";

dotenv.config({path: resolve(".env.local")});

import database from "./database/database.js";
 
import {
    errorHandlerMiddleware,
    notFoundMiddleware
} from "./middlewares/index.js";

import {
    authenticationRouter,
    jobApplicationsRoutes,
} from "./routes/index.js";

const app = express();
const PORT = process.env.PORT;

// Enable json data to be read from the body
app.use(express.json());

app.use("/api/v1/authentication", authenticationRouter);
app.use("/api/v1/job-applications", jobApplicationsRoutes);

// Middleware to handle non-existent routes
app.use("*", notFoundMiddleware);

// Middleware to handle errors in exisiting routes
app.use(errorHandlerMiddleware);

async function main() {
    try {
        // Attemot to connect to MongoDB Database
        await database.connect();
    
        // Allow Express to listen to requests to the server
        app.listen(PORT, () => {
            console.log(`Ricetable server is listening on port: ${ PORT }`);
        });
    }
    
    catch(error) {
        console.log(error);
    }
}

main();
