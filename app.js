const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const port = 4000;

app.use(express.json());
app.use(cors());

/**
 * Las rutas con sus configuraciones respectivas
 */
const activosRouter = require('./routes/activos');
const responsablesRouter = require('./routes/responsables');
const ubicacionesRouter = require('./routes/ubicaciones');

app.use('/activos', activosRouter);
app.use('/responsables', responsablesRouter);
app.use('/ubicaciones', ubicacionesRouter);

app.get('/', (req, res) => {
    res.send('Meta 3.4 Configurar HTTPS y CORS en el servidor')
});

/**
 * Las constantes que contienen las credenciales para crear el servidor
 */
const llavePrivada = fs.readFileSync("server.key");
const certificado = fs.readFileSync("server.crt");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "password"
};
const httpsServer = https.createServer(credenciales, app);

/**
 * Ahora se utiliza el servidor https
 */
httpsServer.listen(port, () => {
    console.log('Servidor https escuchando por el puerto: ', port)
}).on('error', err => {
    console.log('Error al iniciar servidor: ', err)
});