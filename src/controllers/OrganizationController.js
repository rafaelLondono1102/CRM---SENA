import ORGANIZATION_ESCHEMA from "../models/Organization.js";

export const viewOrganization = ((req, res) => {
    ORGANIZATION_ESCHEMA.find(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const getAllOrganizations = ((req,res) => {
    ORGANIZATION_ESCHEMA.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const deleteOrganization = ((req, res) => {
    ORGANIZATION_ESCHEMA.deleteOne({ _id : req.params.id})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const createOrganization = ((req, res) => {
    const NEW_TALENT = ORGANIZATION_ESCHEMA(req.body);
    NEW_TALENT.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const updateOrganization = ((req, res) => {
    const update = { $set : req.body }
    ORGANIZATION_ESCHEMA.updateOne({ _id : req.params.id }, update)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

