const express = require("express")

const app= express()

let usuario=[
    {
        id:1,
        nome: "ana"
    },
    {
        id:2,
        nome:"maria"
    }
];

app.use(express.json())
app.get("/usuario",(req,res) => {
    res.send(usuario);
})
app.listen(3030,()=> 
    console.log("servidor rodando")
)

