import express from "express";

const router = express.Router();

import {
    createJob,
    deleteJob,
    updateJob,
    getAllJobs,
    showJobStats
} from "../controllers/index.js";

router.get("/", getAllJobs);
router.get("/stats", showJobStats);
router.delete("/:id", deleteJob).patch(updateJob);


export default router;