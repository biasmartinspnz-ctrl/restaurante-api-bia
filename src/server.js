require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./config/database")

const app = express()

const PORT = 3001



app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json({
        mensagem:"API funcionando"
    })
})


app.get("/produtos",(req,res)=>{
    try {
        const [produtos] = await db.query(
            "SELECT * from produtos"
        )
        res.statusCode(200).json(produtos)
    } catch (error){
     
    }
})

app.post("/produto", async (req, res) => {
    try {
        const { descricao, categoria, preco, imagem } = req.body;

        const sql = `
            INSERT INTO produto (descricao, categoria, preco, imagem)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.execute(sql, [
            descricao,
            categoria,
            preco,
            imagem
        ]);

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso",
            produto: {
                id: result.insertId,
                descricao,
                categoria,
                preco,
                imagem
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao cadastrar produto"
        });
    }
});


app.delete("/produto/:id" , async(req,res)=>{
    try {
        
   
   await db.query("DELETE FROM produto WHERE id=?")

   res.json({mensagem:"Produto deletado com sucesso !!!"})
   
    } catch (error) {
        console.log(error)
        res.json({
erro: "Erro ao deletar o produtostart"
        })
         }
})

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta 3001")
})

const express = require("express")
const cors = require("cors")
const db = require("./config/database")

const app = express()

const PORT = 3001

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        mensagem:"API funcionando"
    })
})

app.post("/produto", async (req, res) => {
    try {
        const { descricao, categoria, preco, imagem } = req.body;

        const sql = `
            INSERT INTO produto (descricao, categoria, preco, imagem)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.execute(sql, [
            descricao,
            categoria,
            preco,
            imagem
        ]);

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso",
            produto: {
                id: result.insertId,
                descricao,
                categoria,
                preco,
                imagem
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao cadastrar produto"
        });
    }
});

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta 3001")
})
const express = require("express")
const cors = require("cors")
const db = require("./config/database")

const app = express()

const PORT = 3001

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        mensagem:"API funcionando"
    })
})

app.post("/produto", async (req, res) => {
    try {
        const { descricao, categoria, preco, imagem } = req.body;

        const sql = `
            INSERT INTO produto (descricao, categoria, preco, imagem)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.execute(sql, [
            descricao,
            categoria,
            preco,
            imagem
        ]);

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso",
            produto: {
                id: result.insertId,
                descricao,
                categoria,
                preco,
                imagem
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao cadastrar produto"
        });
    }
});

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta 3001")
})

