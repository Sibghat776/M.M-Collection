import express from "express"
import dotenv from "dotenv"


dotenv.config()


let app = express()
let portNumber = process.env.PORT_NUMBER

app.get("/" , (req, res) => {
    res.send ("Assalam u alaikum, Welcome to my website")
})

app.listen(portNumber, () => {
    console.log("Server is running")
})
