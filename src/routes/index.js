import express from "express";
import usuarios from "./usuariosRoutes.js"
import servidores from "./servidoresRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Online..."))
    app.use(express.json(), usuarios, servidores)
};


export default routes;