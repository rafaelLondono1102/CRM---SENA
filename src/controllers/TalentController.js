import TALENT_SCHEMA from "../models/Talent.js";

export const viewTalent = ((req, res) => {
    TALENT_SCHEMA.find(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const getAllTalents = ((req,res) => {
    TALENT_SCHEMA.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const deleteTalent = ((req, res) => {
    TALENT_SCHEMA.deleteOne({ _id : req.params.id})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const createTalent = ((req, res) => {
    const NEW_TALENT = TALENT_SCHEMA(req.body);
    NEW_TALENT.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const updateTalent = ((req, res) => {
    const update = { $set : req.body }
    TALENT_SCHEMA.updateOne({ _id : req.params.id }, update)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

