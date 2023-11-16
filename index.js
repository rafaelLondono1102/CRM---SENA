import { connect } from 'mongoose';
import { DB_HOST, DB_USER, DB_PASS, DB_NAME, API_VERSION, IP_SERVER, PORT } from './constants.js';
import EXPRESS, { json } from "express";
const APP = EXPRESS();
import ROUTES_APP from "./src/routes/index.js";
import cors from 'cors';

APP.use(json());
APP.use(cors({
    origin: '*'
}));
ROUTES_APP(APP);

APP.get(`/api/${API_VERSION}/auth`, (req, res) => {
    res.send('Hola mundo desde mi API')
})


connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito...')
        APP.listen(PORT, () => {
            console.log('#######################')
            console.log('####### API REST ######')
            console.log('#######################')
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}/`)
        })
    })
    .catch(err => console.log("Error al conectar con la BD", err))
