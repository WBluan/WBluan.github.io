import { Router, Request, Response } from "express";

const router = Router();

router.get("/api", (req, res) => {
    return res.json({mensagem: "Bem-vindo a Api"})
}) 

export { router };