const express = require("express");
const app = express()
const fs = require('fs')

app.get("/home", (req, res) => {
    res.send("This is Home page")
})
app.post('/sendData', (req, res) => {
  const data = fs.readFileSync('./data.json', 'utf-8')
  data.push(req.body)  
  res.send(data)
    
}) 

app.listen(8000, () => {
    console.log("Server is running on 8000")
})
