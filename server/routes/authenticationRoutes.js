import express from "express";

const router = express.Router();

import {
    register,
    login,
    updateUser
} from "../controllers/index.js";

router.post("/register", register);

export default router;