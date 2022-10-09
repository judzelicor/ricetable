import express from "express";

const router = express.Router();

import {
    createJobApplication,
    deleteJobApplication,
    updateJobApplication,
    getAllJobApplications,
    showJobApplicationStats
} from "../controllers/index.js";

router.get("/", getAllJobApplications);
router.get("/stats", showJobApplicationStats);
router.delete("/:id", deleteJobApplication).patch(updateJobApplication);


export default router;