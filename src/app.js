import express from "express";
import conectaDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDb();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão bem sucedida!");
})

const app = express();
routes(app);



app.delete ("/usuarios/:id", (req, res) => {
    const index = buscaUsuario(req.params.id);
    res.status(200).json("usuario deletado com sucesso")
})


export default app;