import express from "express";

let authRoute = express.Router()

authRoute.post("/signup", (req, res) => {
    res.send("Signup API")
})


export {
    authRoute
}

