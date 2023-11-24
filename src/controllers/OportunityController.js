import OportunitySchema from "../models/Oportunity.js"

export const viewOportunity = ((req, res) => {
    OportunitySchema.find(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const getAllOportunitys = ((req, res) => {
    console.log("hola")
    OportunitySchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const deleteOportunity = ((req, res) => {
    OportunitySchema.deleteOne({ _id: req.params.id })
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
    const update = { $set: req.body }
    OportunitySchema.updateOne({ _id: req.params.id }, update)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

export const getCountGrowthPotential = ((req, res) => {
    OportunitySchema.aggregate([
        {
            $group: {
                _id: '$growthPotential', // Agrupa por el campo growthPotential
                count: { $sum: 1 } // Cuenta cuántos registros hay en cada grupo
            }
        }
    ]).then(result => {
        console.log(result);
        res.json(result)
    }).catch(err => {
        console.error('Error durante la agregación:', err);
        res.json({ message: err })
    });
})

export const getCountDeliver = ((req, res) => {
    OportunitySchema.aggregate([
        {
            $group: {
                _id: '$deliver', // Agrupa por el campo growthPotential
                count: { $sum: 1 } // Cuenta cuántos registros hay en cada grupo
            }
        }
    ]).then(result => {
        console.log(result);
        res.json(result)
    }).catch(err => {
        console.error('Error durante la agregación:', err);
    });
})

export const getCountAbandonReason = ((req, res) => {
    OportunitySchema.aggregate([
        {
            $group: {
                _id: '$abandonReason', // Agrupa por el campo growthPotential
                count: { $sum: 1 } // Cuenta cuántos registros hay en cada grupo
            }
        }
    ]).then(result => {
        console.log(result);
        res.json(result)
    }).catch(err => {
        console.error('Error durante la agregación:', err);
        res.json({ message: err })
    });
})

export const getCountArticulationArea = ((req, res) => {
    OportunitySchema.aggregate([
        {
            $group: {
                _id: '$articulationArea', // Agrupa por el campo growthPotential
                count: { $sum: 1 } // Cuenta cuántos registros hay en cada grupo
            }
        }
    ]).then(result => {
        console.log(result);
        res.json(result)
    }).catch(err => {
        console.error('Error durante la agregación:', err);
        res.json({ message: err })
    });
})
