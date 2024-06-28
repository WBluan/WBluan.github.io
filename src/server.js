import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//caminho do arquivo atual
const filePath = fileURLToPath(import.meta.url);
//pasta atual
const dirPath = path.dirname(filePath);
const formatedPath = path.join(dirPath, "..","public");


const server = express();
const port = 3000;

//cria o middleware passando os arquivos staticos
server.use(express.static(formatedPath));


server.get("/teste", (req, res) => {
    
    return res.json({message: "Teste deu certo"});
})

server.get("/", (req, res) =>{
    res.sendFile(formatedPath);
});


server.listen(port, () =>{
    console.log(`Servidor on na porta ${port}`);
});

