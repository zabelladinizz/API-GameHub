import { Router } from "express";
import * as jogoController from "../controllers-jogos/estudioController-jogos.js";
import { validarId } from "../middlewears-jogos/validarId-jogos.js";

const router = Router();

router.get("/", jogoController.listar);
router.get("/:id", validarId, jogoController.buscarPorId);
router.post("/", jogoController.criar);
router.put("/:id", validarId, jogoController.atualizar);
router.delete("/:id", validarId, jogoController.excluir);

export default router;