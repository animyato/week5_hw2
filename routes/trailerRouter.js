import express from 'express';
import { createTrailer, 
    getTrailerByTrailerNumber, 
    updateTrailerByTrailerNumber, 
    deleteAllTrailers, 
    deleteTrailerByTrailerNumber, 
    getTrailers } from '../controllers/trailerController.js';

const router = express.Router();

router.post('/trailer/create', createTrailer);
router.get('/trailer/get', getTrailers);
router.get('/trailer/:trailerNumber', getTrailerByTrailerNumber);
router.put('/trailer/update/:trailerNumber', updateTrailerByTrailerNumber);
router.delete('/trailer/delete/:trailerNumber', deleteTrailerByTrailerNumber);
router.delete('/trailer/deleteAll', deleteAllTrailers);

export default router;
