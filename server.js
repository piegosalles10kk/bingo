import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Vem pro bingo"
}



app.listen(PORT, () =>{
    console.log("Servidor escutando!");
})



