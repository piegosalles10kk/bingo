import usuario from "../models/Usuario.js";

class UsuarioController {

    static async listarUsuarios (req, res) {
        try{
            const listaUsuarios = await usuario.find({});
            res.status(200).send(listaUsuarios); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na requisição`})

        };
    };

    static async listarUsuariosPorId (req, res) {
        try{
            const id = req.params.id
            const usuarioEncontrado = await usuario.findById(id);
            res.status(200).send(usuarioEncontrado); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na requisição`})

        };
    };
    
    static async cadastrarUsuario (req, res) {
        try{
            const novoUsuario = await usuario.create(req.body);
                res.status(201).json({
                message: "criado com sucesso",
                usuario: novoUsuario});
            } catch (erro) {
                res.status(500).json({
                message: `${erro.message} - falha ao cadastrar o usuario.`
            })
        };
    };

    static async atualizarUsuario (req, res) {
        try{
            const id = req.params.id
            await usuario.findByIdAndUpdate(id, req.body);
            res.status(200).send({message: "Usuario atualizado"}); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na atualização`})

        };
    };

    static async excluirUsuario (req, res) {
        try{
            const id = req.params.id
            await usuario.findByIdAndDelete(id);
            res.status(200).send({message: "Usuario deletado"}); 
        }catch (erro)   {
            res.status(500).json({message: `${erro.message} falha na requisição`})

        }
    };

    static async usuarioPorNome (req, res) {
        const nome = req.query.nome;
    try{
        const usuarioPorNome = await usuario.find({nome: nome});
        res.status(200).json(usuarioPorNome);
    }catch(erro) {
        res.status(500).json({message: `${erro.message} - falha em localizar o usuario`})
    };
    }
};

export default UsuarioController;