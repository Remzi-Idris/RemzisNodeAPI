const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const https = require('https')

const instrument = {instuments: [{"name": "Guitarr", "kind": "String instrument", },
{"name": "Piano", "kind": "PlingPlong instrument" }, 
{"name": "Violin", "kind": "Stroke instrument"}]}


app.get("/joke", (req, res) =>{
https.get("https://api.chucknorris.io/jokes/random", (response) => {
    response.on('data', (data) =>{
        res.send(JSON.parse(data))
        })

    }).on ("error", (err) => {
        console.log("There was an error " + err.message)
    })
})

app.get("/instruments", (req, res) =>{
    res.send(instrument)
})



app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

// nodemon .\app.js
// node .\app.js

app.listen(PORT,  () =>{
    console.log("Listening to port " + PORT)
})

// git status
// git add .
// git commit -m "first init"
// git push