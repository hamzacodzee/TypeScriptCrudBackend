import express from 'express';
import cors from 'cors';
import crudRouter from './routes/crud';

import connectToMongo from './db';
connectToMongo();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;

// app.get('/hello', (req, res) => {
//     console.log("body" + req.body);
//     res.send("Hello World");
// })

app.use('/api/crud', crudRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});