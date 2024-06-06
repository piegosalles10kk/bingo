import mongoose from "mongoose";


async function conectaDb(){
//mongoose.connect(process.env.DB_CONNECTION_STRING); //Caso queira que a string de conexão seja apenas local
mongoose.connect("mongodb+srv://admin:123@cluster0.qyklr2l.mongodb.net/bingo?retryWrites=true&w=majority&appName=Cluster0");

return mongoose.connection
};

export default conectaDb;