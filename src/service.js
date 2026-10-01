import express from 'express'
import {
const app = express()
const port = 3000

app.use(express.json())

app.use("/veiculos", )

app.listen(port, () => {
    console.log(`app rodando em http://localhost:3000`);

})