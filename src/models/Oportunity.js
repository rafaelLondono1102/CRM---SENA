import { Schema, model } from "mongoose"

const priorityEnum = ["","Alta", "Media", "Baja"]
const growthPotentialEnum = ["","Corto plazo", "Medio plazo", "Largo plazo"]
const articulationAreaEnum = ["","SENA", "Organizaciones gubernamentales", "Instituciones académicas", "ONG"]
const articulationInterestEnum = ["","Recursos económicos", "Recursos técnicos", "Recursos digitales", "Fortalecimiento en la gestión", "Internacionalización", "Propiedad intelectual", "Participación en ferias", "Networking"]
const TRLEnum = ["","TRL 6", "TRL 7", "TRL 8"]
const deliverEnum = ["","Aceleración de proyectos", "Identificación de oportunidades", "No generó impacto"]
const abandonReasonEnum = ["","Motivos ecónomicos", "Falta de tiempo", "Falta de conocimiento de los servicios", "Falta de interés"]
const inovationLevelEnum = ["","Incremental", "Radical", "Disruptiva"]

const OportunitySchema = Schema({
    priority : {type : String, enum : priorityEnum},
    projectName : {type : String},
    growthPotential : {type : String, enum : growthPotentialEnum},
    articulationArea : {type : String, enum : articulationAreaEnum},
    articulationInteres : [{type : String, enum : articulationInterestEnum}],
    initialTRL : {type : String, enum : TRLEnum},
    achivedTRL : {type : String, enum : TRLEnum},
    deliver : {type : String, enum : deliverEnum},
    abandonReason : {type : String, enum : abandonReasonEnum},
    prototipeUse : {type : String},
    inovationLevel : {type : String, enum : inovationLevelEnum},
    observations : {type : String}
})

export default model("OportunityCollection", OportunitySchema)
