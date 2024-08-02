import express from 'express';
import Crud from '../models/CrudModels';
const router = express.Router();

router.post('/add', async(req, res) => {
    try {
        const {s_name, marks, result} = req.body;
        const crud = new Crud({s_name, marks, result});
        await crud.save();
        res.status(201).json({message: "Crud added successfully", crud});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
})

router.put('/edit/:id', async(req, res) => {
    try {
        const {s_name, marks, result} = req.body;
        const crud = await Crud.findByIdAndUpdate(req.params.id, {s_name, marks, result});
        res.status(200).json({message: "Crud updated successfully", crud});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
})

router.delete('/delete/:id', async(req, res) => {
    try {
        await Crud.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Crud deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
})

router.get('/get', async(req, res) => {
    try {
        const crud = await Crud.find();
        res.status(200).json({message: "Crud fetched successfully", crud});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
})

router.get('/get/:id', async(req, res) => {
    try {
        const crud = await Crud.findById(req.params.id);
        res.status(200).json({message: "Crud fetched successfully", crud});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
})

export default router;