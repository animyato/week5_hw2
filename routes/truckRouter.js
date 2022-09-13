import express from 'express';
import { createTruck, 
    getTruckByTruckNumber, 
    getTrucks, deleteAllTrucks, 
    deleteTruckByTruckNumber, 
    updateTruckByTruckNumber } from '../controllers/truckController.js';

const router = express.Router();

router.post('/trucks/create', createTruck);
router.get('/trucks/get', getTrucks);
router.get('/trucks/:truckNumber', getTruckByTruckNumber);
router.put('/trucks/update/:truckNumber', updateTruckByTruckNumber);
router.delete('/trucks/delete/:truckNumber', deleteTruckByTruckNumber);
router.delete('/trucks/deleteAll', deleteAllTrucks);

export default router;