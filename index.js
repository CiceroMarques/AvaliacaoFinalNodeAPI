import express from 'express'
import database from './src/config/database.js';
import routercliente from './src/router/cliente.js';
import routeratendimento from './src/router/atendimento.js';



const app = express();
app.use(express.json())


app.use("/api/cliente", routercliente)
app.use("/api/atendimento", routeratendimento)


database.db
        .sync({force: false })
        .then((_) => {
            app.listen(3000, () => {
                console.log("Servidor ouvindo na porta 3000")
            })
        })
        .catch ( (e) => {
            console.log(e)
        })