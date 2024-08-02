import mongoose from 'mongoose';

const crudSchema = new mongoose.Schema({
    s_name: String,
    marks: Number,
    result: Boolean
});

const Crud = mongoose.model('Crud', crudSchema);

export default Crud;
