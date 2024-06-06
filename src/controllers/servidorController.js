import servidor from "../models/Servidor.js";

class ServidorController {

    static async listarServidores (req, res) {
        try{
            const listaServidores = await servidor.find({});
            res.status(200).send(listaServidores); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na requisição`})

        };
    };

    static async listarServidoresPorId (req, res) {
        try{
            const id = req.params.id
            const servidorEncontrado = await servidor.findById(id);
            res.status(200).send(servidorEncontrado); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na requisição`})

        };
    };
    
    static async cadastrarServidor (req, res) {
        try{
            const novoServidor = await servidor.create(req.body);
                res.status(201).json({
                message: "criado com sucesso",
                usuario: novoServidor});
            } catch (erro) {
                res.status(500).json({
                message: `${erro.message} - falha ao cadastrar o usuario.`
            })
        };
    };

    static async atualizarServidor (req, res) {
        try{
            const id = req.params.id
            await servidor.findByIdAndUpdate(id, req.body);
            res.status(200).send({message: "Servidor atualizado"}); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na atualização`})

        };
    };

    static async excluirServidor (req, res) {
        try{
            const id = req.params.id
            await servidor.findByIdAndDelete(id);
            res.status(200).send({message: "Usuario deletado"}); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na requisição`})

        }
    };
};

export default ServidorController;