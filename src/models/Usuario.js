import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: {type : mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    numeroDeVitorias: {type: Number, required: false},
    numerosSelecionados: {type: Array, required: false},
    cartela: {type: Array, required: false, }
}, {versionKey: false});

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;