import mongoose from "mongoose";

const servidorSchema = new mongoose.Schema({

        id: {type : mongoose.Schema.Types.ObjectId},
        jogadores : {type : Array, required: false},
        precoCartela: {type: Number, required: false},
        chavePix: {type: String, required: false},
        numerosSorteados: {type : Array, required: false},
        status: {type: String, required: true}                        

}, {versionKey: false});

const servidor = mongoose.model("servidores", servidorSchema);

export default servidor;