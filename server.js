const express = require("express");
const app = express();

app.get("/login",(req,res)=>{
    res.send("Bem vindo ao login.")
});

app.get("/sistema",(req,res)=>{
    res.send("Acessando o sistema.")
})

// Executando o servidor na porta 3000
app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
})