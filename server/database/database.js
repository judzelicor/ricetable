import mongoose from "mongoose";

class Database {
    constructor() {
        this.mongoose = mongoose;
    }

    connect() {
        return this.mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    }
}

export default new Database();