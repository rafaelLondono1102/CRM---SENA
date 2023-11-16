import EXPRESS from "express";
import {
    viewTalent,
    getAllTalents,
    deleteTalent,
    createTalent,
    updateTalent
} from "../controllers/TalentController.js";

const TALENT_ROUTES = EXPRESS.Router()

TALENT_ROUTES.get("/:id", viewTalent)
TALENT_ROUTES.get("/", getAllTalents)
TALENT_ROUTES.delete("/:id", deleteTalent)
TALENT_ROUTES.post("/", createTalent)
TALENT_ROUTES.put("/:id", updateTalent)

export default TALENT_ROUTES
