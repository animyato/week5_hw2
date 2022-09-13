import express from 'express';
import { deleteAllWarehouses, 
    deleteWarehouseByWarehouseNumber, 
    updateWarehouseByWarehouseNumber, 
    createWarehouse, addTrailersToWarehouse,
    addTrucksToWarehouse, 
    removeTrailersFromWarehouse, 
    removeTrucksFromWarehouse,
    getWarehouseByWarehouseNumber,
    getWarehouses,
    getTrucksByWarehouseNumber,
    getTrailersByWarehouseNumber } from '../controllers/warehouseController.js';

const router = express.Router();

router.post('/warehouse/create', createWarehouse);
router.get('/warehouse/get', getWarehouses);
router.get('/warehouse/:warehouseNumber', getWarehouseByWarehouseNumber);
router.put('/warehouse/update/:warehouseNumber', updateWarehouseByWarehouseNumber);
router.delete('/warehouse/delete/:warehouseNumber', deleteWarehouseByWarehouseNumber);
router.delete('/warehouse/deleteAll', deleteAllWarehouses);
router.put('/warehouse/addTrucks/:warehouseNumber', addTrucksToWarehouse);
router.put('/warehouse/addTrailers/:warehouseNumber', addTrailersToWarehouse);
router.put('/warehouse/removeTrucks/:warehouseNumber', removeTrucksFromWarehouse);
router.put('/warehouse/removeTrailers/:warehouseNumber', removeTrailersFromWarehouse);
router.get('/warehouse/getTrucks/:warehouseNumber', getTrucksByWarehouseNumber);
router.get('/warehouse/getTrailers/:warehouseNumber', getTrailersByWarehouseNumber);

export default router;