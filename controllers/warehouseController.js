import warehouseModel from '../models/warehouseModel.js';
import truckModel from '../models/truckModel.js';
import trailerModel from '../models/trailerModel.js';

export const createWarehouse = async (req, res) => {
    try {
        const newWarehouse = new warehouseModel({ 
            ...req.body
         });
        await newWarehouse.save();
        res.status(200).send(newWarehouse);
    } catch (error) {
        res.status(409).send(error);
    }
}

export const getWarehouses = async (req, res) => {
    try{
        const warehouseList = await warehouseModel.find({});
        res.status(200).send(warehouseList);
    }catch (error){
        res.status(404).send(error);
    }
}

export const getWarehouseByWarehouseNumber = async (req, res) => {
    try{
        const { warehouseNumber } = req.params;
        const warehouse = await warehouseModel.findOne({warehouseNumber: warehouseNumber});
        res.status(200).send(warehouse);
    }catch (error){
        res.status(404).send(error);
    }
}

export const updateWarehouseByWarehouseNumber = async (req, res) => {
    try{
        const { warehouseNumber } = req.params;
        const updatedWarehouse = await warehouseModel.findOneAndUpdate({warehouseNumber: warehouseNumber}, 
            { 
                ...req.body,
            }
        , { new: true });
        res.status(200).send(updatedWarehouse);
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteWarehouseByWarehouseNumber = async (req, res) => {
    try{
        const { warehouseNumber } = req.params;
        await warehouseModel.findOneAndDelete({warehouseNumber: warehouseNumber});
        res.status(200).send('Warehouse is deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteAllWarehouses = async (req, res) => {
    try{
        await warehouseModel.deleteMany({});
        res.status(200).send('All warehouses are deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const addTrailersToWarehouse = async (req, res) => {
    try{
        const warehouse = await warehouseModel.findOne({warehouseNumber: req.params.warehouseNumber});
        const trailer = await trailerModel.findOne({trailerNumber: req.body.trailerNumber});  
        warehouse.trailersInside.push(trailer);
        await warehouse.save();
        res.status(200).send(warehouse);
    }catch (error){
        res.status(409).send(error);
    }
}

export const addTrucksToWarehouse = async (req, res) => {
    try{
        const warehouse = await warehouseModel.findOne({warehouseNumber: req.params.warehouseNumber});
        const truck = await truckModel.findOne({truckNumber: req.body.truckNumber});
        warehouse.trucksInside.push(truck);
        await warehouse.save();
        res.status(200).send(warehouse);
    }catch (error){
        res.status(409).send(error);
    }
}

export const removeTrailersFromWarehouse = async (req, res) => {
    try{
        const warehouse = await warehouseModel.findOne({warehouseNumber: req.params.warehouseNumber});
        const trailer = await trailerModel.findOne({trailerNumber: req.body.trailerNumber});  
        warehouse.trailers.pull(trailer);
        await warehouse.save();
        res.status(200).send(warehouse);
    }catch (error){
        res.status(409).send(error);
    }
}

export const removeTrucksFromWarehouse = async (req, res) => {
    try{
        const warehouse = await warehouseModel.findOne({warehouseNumber: req.params.warehouseNumber});
        const truck = await truckModel.findOne({truckNumber: req.body.truckNumber});
        warehouse.trucks.pull(truck);
        await warehouse.save();
        res.status(200).send(warehouse);
    }catch (error){
        res.status(409).send(error);
    }
}

export const getTrucksByWarehouseNumber = async (req, res) => {
    try{
        const { warehouseNumber } = req.params;
        const warehouse = await warehouseModel.findOne({warehouseNumber: warehouseNumber});
        const trucks = await warehouse.trucksInside;
        res.status(200).send(trucks);
    }catch (error){
        res.status(404).send(error);
    }
}

export const getTrailersByWarehouseNumber = async (req, res) => {
    try{
        const { warehouseNumber } = req.params;
        const warehouse = await warehouseModel.findOne({warehouseNumber: warehouseNumber});
        const trailers = await warehouse.trailersInside;
        res.status(200).send(trailers);
    }catch (error){
        res.status(404).send(error);
    }
}