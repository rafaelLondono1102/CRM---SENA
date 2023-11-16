import EXPRESS from "express";
import {
    viewOrganization,
    getAllOrganizations,
    deleteOrganization,
    createOrganization,
    updateOrganization
} from "../controllers/OrganizationController.js";

const ORGANIZATION_ROUTES = EXPRESS.Router()

ORGANIZATION_ROUTES.get("/", getAllOrganizations)
ORGANIZATION_ROUTES.get("/:id" , viewOrganization)
ORGANIZATION_ROUTES.delete("/:id", deleteOrganization)
ORGANIZATION_ROUTES.post("/",createOrganization)
ORGANIZATION_ROUTES.put("/:id", updateOrganization)

export default ORGANIZATION_ROUTES
