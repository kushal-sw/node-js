// const express = require("express");
// const app = express()
// const fs = require('fs')

// app.get("/home", (req, res) => {
//     res.send("This is Home page")
// })
// app.post('/sendData', (req, res) => {
//   const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
//   data.push(req.body)  
//   res.send(data)
// }) 

// app.listen(8000, () => {
//     console.log("Server is running on 8000")
// })



const fs = require('fs');
const express = require("express");
const app = express();
app.use(express.json());

app.patch('/updateData/:id', (req, res) => {
    const id = req.params.id
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
    console.log(id)




})
app.listen(3000, () => {
    console.log('server is running on 3000')
})
