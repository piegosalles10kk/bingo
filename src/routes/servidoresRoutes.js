import express from "express";
import ServidorController from "../controllers/servidorController.js";

const routes = express.Router();

routes.get("/servidor", ServidorController.listarServidores);
routes.get("/servidor/:id", ServidorController.listarServidoresPorId);
routes.post("/servidor", ServidorController.cadastrarServidor);
routes.put("/servidor/:id", ServidorController.atualizarServidor);
routes.delete("/servidor/:id", ServidorController.excluirServidor);


export default routes;