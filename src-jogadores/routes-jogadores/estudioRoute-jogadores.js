import { Router } from "express";
import * as estudioController from "../controllers-jogadores/estudioController-jogadores.js";
import { validarId } from "../middlewears-jogadores/validarId-jogadores.js";

const router = Router();

router.get("/", estudioController.listar);
router.get("/:id", validarId, estudioController.buscarPorId);
router.post("/", estudioController.criar);
router.put("/:id", validarId, estudioController.atualizar);
router.delete("/:id", validarId, estudioController.excluir);

export default router;