import express from "express";
import { signup } from "../Controllers/authController.js";

export let authRoute = express.Router()

authRoute.post("/signup", signup)




