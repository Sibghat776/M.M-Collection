import express from "express"
import dotenv from "dotenv"
import {authRoute} from "./Routes/authRoute.js"

dotenv.config()
let app = express()
let portNumber = process.env.PORT_NUMBER

// Midlewares
app.use("/auth", authRoute)





app.get("/" , (req, res) => {
    res.send ("Assalam u alaikum, Welcome to my website")
})
app.listen(portNumber, () => {
    console.log("Server is running")
})
