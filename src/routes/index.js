import { Router } from "express";
import OPORTUNITY_ROUTES from "./OportunityRoutes.js";
import TALENT_ROUTES from "./TalentRoutes.js";
import ORGANIZATION_ROUTES from "./OrganizationRoutes.js"
import {
    getCountGrowthPotential,
    getCountDeliver,
    getCountAbandonReason,
    getCountArticulationArea
} from "../controllers/OportunityController.js";
const ROUTES = Router();

const ROUTES_APP = (APP) => {
    APP.use("/api/v1", ROUTES);
    ROUTES.use("/oportunity", OPORTUNITY_ROUTES)
    ROUTES.use("/organization", ORGANIZATION_ROUTES)
    ROUTES.use("/talent", TALENT_ROUTES)
    ROUTES.get("/growPotential", getCountGrowthPotential)
    ROUTES.get("/deliver", getCountDeliver)
    ROUTES.get("/abandonReason", getCountAbandonReason)
    ROUTES.get("/articulationArea", getCountArticulationArea)

}
export default ROUTES_APP;
