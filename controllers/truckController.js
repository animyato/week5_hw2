import { get } from 'http';
import truckModel from '../models/truckModel.js';

export const createTruck = async (req, res) => {
    try{
        const newTruck = new truckModel({ 
            ...req.body
        });
        await newTruck.save();
        res.status(200).send(newTruck);
    }catch (error){
        res.status(409).send(error);
    }
}

export const getTrucks = async (req, res) => {
    try{
        const truckList = await truckModel.find({});
        res.status(200).send(truckList);
    }catch (error){
        res.status(404).send(error);
    }
}

export const updateTruckByTruckNumber= async (req, res) => {
    try{
        const { truckNumber } = req.params;
        const updatedTruck = await truckModel.findOneAndUpdate({truckNumber: truckNumber}, 
            { 
                ...req.body,
            }
        , { new: true });
        res.status(200).send(updatedTruck);
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteTruckByTruckNumber = async (req, res) => {
    try{
        const { truckNumber } = req.params;
        await truckModel.findOneAndDelete({truckNumber: truckNumber});
        res.status(200).send('Truck is deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteAllTrucks = async (req, res) => {
    try{
        await truckModel.deleteMany({});
        res.status(200).send('All trucks are deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const getTruckByTruckNumber = async (req, res) => {
    try{
        const { truckNumber } = req.params;
        const truck = await truckModel.findOne({truckNumber: req.params.truckNumber});
        res.status(200).send(truck);
    }catch (error){
        res.status(409).send(error);
    }
}


