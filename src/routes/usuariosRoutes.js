import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routes = express.Router();

routes.get("/usuarios", UsuarioController.listarUsuarios);
routes.get("/usuarios/busca", UsuarioController.usuarioPorNome);
routes.get("/usuarios/:id", UsuarioController.listarUsuariosPorId);
routes.post("/usuarios", UsuarioController.cadastrarUsuario);
routes.put("/usuarios/:id", UsuarioController.atualizarUsuario);
routes.delete("/usuarios/:id", UsuarioController.excluirUsuario);


export default routes;