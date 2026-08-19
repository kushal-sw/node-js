const express = require("express")
const app = express()
const fs = require('fs')
app.use(express.json());

app.get('/home',(req, res)=>{
    res.send("hola si dora")
})
app.post("/sendData",(req, res)=>{

    const data = JSON.parse(fs.readFileSync('./Data.json', 'utf-8'))
    data.push(req.body)
    res.send(data)
    
})

app.patch("/patch/:id", (req , res)=>{
    const id = req.params.id
    const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"))
    console.log(id)
    res.send("${id}")

})







app.listen(3000,()=>{
    console.log('server runing on 3000')
})