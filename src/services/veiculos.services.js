// import { configDotenv } from "dotenv"
class VeiculosSservice {
    async getAll(){
        const res = await pool.query("SELECT * FROM veiculos");
        return res.rows;
    }

    async create(dados){
    const res = await pool.query("INSERT INTO... RETURNING*", [dados]);
    return res.rows(0)
    }
}