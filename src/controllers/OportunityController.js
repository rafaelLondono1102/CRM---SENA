import OportunitySchema from "../models/Oportunity.js"

export const viewOportunity = ((req, res) => {
    OportunitySchema.find(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const getAllOportunitys = ((req,res) => {
    OportunitySchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const deleteOportunity = ((req, res) => {
    OportunitySchema.deleteOne({ _id : req.params.id})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const createOportunity = ((req, res) => {
    const NEW_TALENT = new OportunitySchema(req.body);
    console.log(NEW_TALENT)
    NEW_TALENT.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const updateOportunity = ((req, res) => {
    const update = { $set : req.body }
    OportunitySchema.updateOne({ _id : req.params.id }, update)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})
