import express from "express";

import {
    register,
    login,
    updateUser
} from "../controllers/index.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", updateUser);

export default router;