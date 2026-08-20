const express = require('express')
const app = express()
const port = 3000;
app.use(express.json())
app.use(express.text())
const middleware = (req , res , next)=>{
    console.log("middleware hu re.......")
    next();
}



app.post('/sendData', (req,res)=>{
    res.send(req.body)
    console.log(req.body)
})













app.listen(port, ()=>{
    console.log(`server is running on port ${port} `)
})