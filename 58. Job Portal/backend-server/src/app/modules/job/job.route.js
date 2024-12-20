import express from 'express';
import { JobController } from './job.controller.js';

const router = express.Router();

// Get all jobs
router.get('/', JobController.getJobs);

// Get single job
router.get('/:id', JobController.getJob);

// Create new job
router.post('/', JobController.createJob);

// Update a job
router.put('/:id', JobController.updateJob);

// Delete a job
router.delete('/:id', JobController.deleteJob);

export const JobRoutes = router;
