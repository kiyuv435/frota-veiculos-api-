import { pool } from "../config/db.js";

class VeiculosService {
    async getAll(){
        const res = await pool.query("SELECT * FROM veiculos");
        return res.rows;
    }

    async create(dados){
    const res = await pool.query("INSERT INTO veiculos (modelo,marca,ano,placa) values ('Rs1000', 'BMW', '2023', '2B31-15') RETURNING*", [dados]);
    return res.rows(0)
    }
}

export const veiculosService = new VeiculosService()