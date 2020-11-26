const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello World!"))

// Static assets
app.get('/json1', (req,res) => setTimeout( () => res.send(JSON.stringify({ hello: "world1" })), 1000))
app.get('/json2', (req,res) => setTimeout( () => res.send(JSON.stringify({ hello: "world2" })), 2000))
app.get('/json3', (req,res) => setTimeout( () => res.send(JSON.stringify({ hello: "world3" })), 3000))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// Pour exécuter localement: node app.js
// Si Express n'est pas installé, vous pouvez exécuter npm install express au préalable
