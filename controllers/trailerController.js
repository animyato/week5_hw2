import trailerModel from "../models/trailerModel.js";

export const createTrailer = async (req, res) => {
    try {
        const { trailerNumber, trailerType, trailerStatus, trailerLocation } = req.body;
        const newTrailer = new trailerModel({ trailerNumber, trailerType, trailerStatus, trailerLocation });
        await newTrailer.save();
        res.status(200).send(newTrailer);
    } catch (error) {
        res.status(409).send(error);
    }
}

export const getTrailers = async (req, res) => {
    try{
        const trailerList = await trailerModel.find({});
        res.status(200).send(trailerList);
    }catch (error){
        res.status(404).send(error);
    }
}

export const updateTrailerByTrailerNumber= async (req, res) => {
    try{
        const { trailerNumber } = req.params;
        const updatedTrailer = await trailerModel.findOneAndUpdate({trailerNumber: trailerNumber}, 
            { 
                ...req.body,
            }
        , { new: true });
        res.status(200).send(updatedTrailer);
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteTrailerByTrailerNumber = async (req, res) => {
    try{
        const { trailerNumber } = req.params;
        await trailerModel.findOneAndDelete({trailerNumber: trailerNumber});
        res.status(200).send('Trailer is deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteAllTrailers = async (req, res) => {
    try{
        await trailerModel.deleteMany({});
        res.status(200).send('All trailers are deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const getTrailerByTrailerNumber = async (req, res) => {
    try{
        const { trailerNumber } = req.params;
        const trailer = await trailerModel.findOne({trailerNumber: trailerNumber});
        res.status(200).send(trailer);
    }catch (error){
        res.status(409).send(error);
    }
}
