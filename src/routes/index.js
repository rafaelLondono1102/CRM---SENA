import { Router } from "express";
import OPORTUNITY_ROUTES from "./OportunityRoutes.js";
import TALENT_ROUTES from "./TalentRoutes.js";
import ORGANIZATION_ROUTES from "./OrganizationRoutes.js"

const ROUTES = Router();

const ROUTES_APP = (APP) => {
    APP.use("/api/v1",ROUTES);
    ROUTES.use("/oportunity", OPORTUNITY_ROUTES)
    ROUTES.use("/organization", ORGANIZATION_ROUTES)
    ROUTES.use("/talent", TALENT_ROUTES)

}
export default ROUTES_APP;
