import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import connection from './utils/connectionToDB.js';
import truckRouter from './routes/truckRouter.js';
import trailerRouter from './routes/trailerRouter.js';
import warehouseRouter from './routes/warehouseRouter.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    express.json();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api", truckRouter);
app.use("/api", trailerRouter);
app.use("/api", warehouseRouter);

app.listen(port, () => {
    connection();
  console.log(`Server listening on port ${port}`);
});