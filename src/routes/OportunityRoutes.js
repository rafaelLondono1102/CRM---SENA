import EXPRESS from "express";
import { viewOportunity,
    getAllOportunitys,
    deleteOportunity,
    createOportunity,
    updateOportunity
} from "../controllers/OportunityController.js";

const OPORTUNITY_ROUTES = EXPRESS.Router()

OPORTUNITY_ROUTES.get("/", getAllOportunitys)
OPORTUNITY_ROUTES.get("/:id", viewOportunity)
OPORTUNITY_ROUTES.post("/", createOportunity)
OPORTUNITY_ROUTES.put("/:id", updateOportunity)
OPORTUNITY_ROUTES.delete("/:id", deleteOportunity) 

export default OPORTUNITY_ROUTES
